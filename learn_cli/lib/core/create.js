const { program } = require('commander');
const { createRepostoryAction, addComponentAction, addPageAndRouterAction, addStoreAction } = require('./actions');

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .alias('c')
    .description('clone a repostory into a folder')
    .action(createRepostoryAction);

  program
    .command('addcpn <component>')
    .alias('ac')
    .description('add vue component, for example: mariana addcpn HelloWorld [-d src/components]')
    .option('-d, --dest <dest>', 'component written destination', 'src/components')
    .action(addComponentAction);
  program
    .command('addpage <page>')
    .alias('ap')
    .description('add vue page and router, for example: mariana addpage category [-d src/pages]')
    .option('-d, --dest <dest>', 'page writted destination', 'src/pages')
    .action(addPageAndRouterAction);
  program
    .command('addstore <page>')
    .alias('ap')
    .description('add vue store and type, for example: mariana addstore category [-d src/store]')
    .option('-d, --dest <dest>', 'page writted destination', 'src/store')
    .action(addStoreAction);
};

module.exports = createCommands;
