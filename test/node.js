const mockData = require('./mockData');

const index = require('../index.js');
const options = {
  data: mockData,
  filePath:
    '/Users/jj/Documents/framework/cookPlugin/firstTest',
  workspaceFolders: [
    {
      uri: {
        $mid: 1,
        fsPath:
          '/Users/jj/Documents/framework/cookPlugin',
        external:
          'file:///Users/jj/Documents/framework/cookPlugin',
        path:
          '/Users/jj/Documents/framework/cookPlugin',
        scheme: 'file',
      },
      name: 'firstTest',
      index: 0,
    },
  ],
  config: {
    accessId: 'xx',
    dslId: 41,
    generator: ['@imgcook/generator-vue-jzynut'],
    plugin: ['@imgcook/plugin-images'],
    uploadUrl: '',
    value: '17679',
  },
};

index(options);
