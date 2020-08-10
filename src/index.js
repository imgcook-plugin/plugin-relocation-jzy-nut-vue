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
    `@import '.../css/components/${fileName}/${fileName}.response.css'`
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

/**
 * Rax 1.0 多页应用 && 单页应用源码生成更新路由信息 app.json
 * @param {*} appJSONPath
 * @param {*} pageName
 */
function calcuAppJSONPanel(appJSONPath, pageName) {
  if (!fs.pathExistsSync(appJSONPath)) {
    return null;
  }
  try {
    const json = JSON.parse(fs.readFileSync(appJSONPath).toString());
    if (!json.routes) {
      json.routes = [];
    }
    const routesPath = json.routes.map(i => i.path);
    if (routesPath.indexOf(`/${pageName}`) === -1) {
      json.routes.push({
        path: `/${pageName}`,
        source: `pages/${pageName}/index`
      });
      return {
        panelPath: appJSONPath,
        panelName: 'app.json',
        panelValue: `${JSON.stringify(json, null, 2)}\n`,
        panelType: 'json'
      };
    }
    return null;
  } catch (e) {
    return null;
  }
}

const pluginHandler = async options => {
  console.log(JSON.stringify(options));
  let { filePath, workspaceFolders, data } = options;
  let pageName = getPageName(data);
  filePath = path.resolve(filePath);
  options.filePath = filePath;
  const workspaceFolder = path.resolve(workspaceFolders[0].uri.path);

  const panelDisplay = data.code.panelDisplay;
  let imports = [];
  data.code.panelDisplay = panelDisplay.map(item => {
    try {
      let { panelName, panelValue, panelImports = [] } = item;
      let panelPath = '';
      const fileType = panelName.split('.')[1];
      
      panelName =  panelName.replace('index', pageName);
      if (fileType == 'vue'){
        panelPath = path.resolve(workspaceFolder, 'src', 'components', pageName, panelName);
        panelValue = replaceCssImport(panelValue, pageName);
        imports = collectImports(imports, panelImports);
      }else{
        panelPath = path.resolve(workspaceFolder, 'css', 'components', pageName, panelName);
      }
        
      return {
        ...item,
        panelName,
        panelValue,
        panelPath
      };
    } catch (error) {}
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

  // 如需要开启 codediff 功能，需要返回如下两个字段
  // data.code.codeDiff = true;
  options.workspaceFolder = workspaceFolder;
  console.log('[@imgcook/plugin-relocation] options:');
  console.log(JSON.stringify(options));
  return options;
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });   
};
