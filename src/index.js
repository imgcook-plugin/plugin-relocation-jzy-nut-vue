/**
 * @name plugin directory
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const fs = require('fs-extra');
const path = require('path');

function replaceCssImport(panelValue, fileName) {
  panelValue = panelValue.replace(
    `@import './index.response.css';`,
    `@import '../../assets/css/components/${fileName}/${fileName}.response.css';`
  );
  return panelValue;
}

function collectImports(imports, panelImports) {
  return panelImports
    .filter(item => {
      return item.import.indexOf('./') === -1 && item.import.indexOf('../') === -1;
    })
    .concat(imports);
}

function getPageName(data) {
  if (data && data.moduleData) {
    if (data.moduleData.name) {
      return data.moduleData.name;
    } else if (data.moduleData.id) {
      return 'page' + data.moduleData.id;
    }
  }
  return 'page';
}

/**
 * 源码生成后，将依赖的 npm 包写入 package.json
 * @param {*} packageJSONPath
 * @param {*} imports
 */
function calcuPackageJSONPanel(packageJSONPath, imports) {
  if (!fs.pathExistsSync(packageJSONPath)) {
    return null;
  }
  let flag = false;
  try {
    const json = JSON.parse(fs.readFileSync(packageJSONPath).toString());
    if (!json.dependencies) {
      json.dependencies = {};
    }
    if (!json.devDependencies) {
      json.devDependencies = {};
    }
    imports.forEach(item => {
      const name = item.package;
      const version = item.version || '*';
      if (!json.dependencies[name] && !json.devDependencies[name]) {
        flag = true;
        json.dependencies[name] = version;
      }
    });
    if (flag) {
      return {
        panelPath: packageJSONPath,
        panelName: 'package.json',
        panelValue: `${JSON.stringify(json, null, 2)}\n`,
        panelType: 'json'
      };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

function firstUpperCase(str) {  
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  
}  

function addToRoute(workspaceFolder, pageName){
  let routeJSONPath = path.resolve(workspaceFolder, 'src','router', 'index.js')
  if (!fs.pathExistsSync(routeJSONPath)) {
    return null;
  }

  try {
    let routeContex = fs.readFileSync(routeJSONPath).toString(); 
    let routeJson = routeContex.match(/(?<=routes).*(?=\])/s);
    if (!routeJson){
      console.log("can't find routes");     
      return null;
    }
    
    routeJson = routeJson[0];
    if (routeJson.indexOf(`${pageName}`) != -1){
      console.log(`${pageName} also exist.`);
      return null;
    }

    let lcPageName = pageName.toLowerCase();
    routeJson = `${routeJson.replace(/\r\n+$/,'')},\r\n  {\r\n    path: "/${lcPageName}",\r\n    name: "${pageName}",\r\n    component: () =>\r\n      import("../components/${lcPageName}/${pageName}.vue")\r\n  }\r\n`
    routeContex = routeContex.replace(/(?<=const routes \=).*(?=\])/s, routeJson);
    
    fs.writeFileSync(routeJSONPath, routeContex, 'utf8');
      
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

const pluginHandler = async options => {
  console.log('[@imgcook/plugin-relocation] start');
  try{
    let { data } = options;
    const { filePath, config } = options;
    let configPathArray = filePath.split('/');
    let configPath = configPathArray[configPathArray.length -1];
    
    let pageName = configPath;//getPageName(data);
    const workspaceFolder = path.resolve(filePath.replace('/'+configPath, ''));

    const panelDisplay = data.code.panelDisplay;
    let imports = [];
    data.code.panelDisplay = await panelDisplay.map(async item => {
      try {
        let { panelName, panelValue, panelImports = [] } = item;
        let panelPath = '';
        const fileType = panelName.split('.')[1];
        
        panelName =  panelName.replace('index', pageName);
        if (fileType == 'vue'){
          panelPath = path.resolve(workspaceFolder, 'src', 'components', pageName);
          panelValue = replaceCssImport(panelValue, pageName);
          imports = collectImports(imports, panelImports);
          panelName = firstUpperCase(panelName);

          // 添加到Route.js
          addToRoute(workspaceFolder, pageName);
        }else{
          panelPath = path.resolve(workspaceFolder, 'src', 'assets', 'css', 'components', pageName);
        }

        if (!fs.existsSync(panelPath)) {
          fs.mkdirSync(panelPath, { recursive: true });
        }
        await fs.writeFile(path.resolve(panelPath, panelName), panelValue, 'utf8');
          
        return {
          ...item,
          panelName,
          panelValue,
          panelPath
        };
      } catch (error) {
        console.error(error);
      }
    });

    // 解析是否要写入 package.json
    let packagejson = path.resolve(workspaceFolder, 'package.json');
    if (packagejson && imports.length > 0) {
      const pkgPanel = calcuPackageJSONPanel(exportDirs.packagejson, imports);
      if (pkgPanel) {
        data.code.panelDisplay.push(pkgPanel);
      }
    }

    // 解析是否要写入 app.json
    //let appjson = path.resolve(workspaceFolder, 'app.json');
    // if (appjson) {
    //   const appPanel = calcuAppJSONPanel(appjson, pageName);
    //   if (appPanel) {
    //     data.code.panelDisplay.push(appPanel);
    //   }
    // }

    // delete tempfiles
    if (fs.existsSync(filePath)) {
      fs.rmdirSync(filePath, { recursive: true });
    } 
  }catch (error) {
    console.error(error);
    throw error;
  }

  // 如需要开启 codediff 功能，需要返回如下两个字段
  // data.code.codeDiff = true;
  options.filePath = workspaceFolder;
  console.log('[@imgcook/plugin-relocation] end');
  return options;
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });   
};
