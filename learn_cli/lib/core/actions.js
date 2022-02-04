/* eslint-disable no-unused-vars */
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const chalk = require('chalk');
const open = require('open');
const { vueRepo } = require('../config/repo');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile, generateTargetDirSync } = require('../utils/utils');
const camelToKabeb = require('camel-to-kebab');
const path = require('path');
const log = console.log;

const createRepostoryAction = async (project, others) => {
  /**
   * 1. clone temp
   * 2. npm install
   * 3. npm run serve
   * 4. open browser
   */
  log(chalk.blue('mariana helps you create scaffold~'));
  // 1. clone temp
  await download(vueRepo, project, { clone: true });
  // 2. npm install
  // 2.1 diff os
  const command = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  await commandSpawn(command, ['install'], { cwd: `./${project}` });
  // 3. npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });
  // 4. open browser
  open('http://localhost:8080/');
  log(chalk.blue('scaffold has created~'));
};
/**
 *
 * @param {*} component 组件名
 * @param {*} options program.opts()
 */
const addComponentAction = async (component, options) => {
  log(chalk.green(`start to generate ${component}.vue`));
  const renderData = { data: { name: component, kebabName: camelToKabeb(component) } };
  // 1. 编译ejs为vue
  const result = await compile('vue-component.ejs', renderData);
  // 2, write file 写入
  const { dest } = options;
  const targetComponentPath = path.resolve(dest, `${component}.vue`);
  writeToFile(targetComponentPath, result);
  log(chalk.green(`add component ${component}.vue successfully~`));
};

const addPageAndRouterAction = async (page, options) => {
  log(chalk.green(`start to generate page`));
  // 编译ejs为vue
  const pageRenderData = { data: { name: page, kebabName: camelToKabeb(page) } };
  const [pageText, routerText] = await Promise.all([
    compile('vue-component.ejs', pageRenderData),
    compile('vue-router.ejs', pageRenderData),
  ]);
  // check 目录是否存在 不存在生成相应目录
  const { dest } = options;
  const targetPath = path.resolve(dest, page);
  if (generateTargetDirSync(targetPath)) {
    // write file 写入
    const targetPagePath = path.resolve(targetPath, `${page}.vue`);
    const targetRouterPath = path.resolve(targetPath, 'router.js');
    await Promise.all([writeToFile(targetPagePath, pageText), writeToFile(targetRouterPath, routerText)]);
    log(chalk.green(`add page successfully~`));
  }
};

const addStoreAction = async (store, options) => {
  log(chalk.green(`start to generate store`));
  // 编译ejs为vue
  const storeRenderData = { data: { name: store, kebabName: camelToKabeb(store) } };
  const [storeText, typeText] = await Promise.all([
    compile('vue-store.ejs', storeRenderData),
    compile('vue-types.ejs', storeRenderData),
  ]);
  // check 目录是否存在 不存在生成相应目录
  const { dest } = options;
  const targetPath = path.resolve(dest, store);
  if (generateTargetDirSync(targetPath)) {
    // write file 写入
    const targetPagePath = path.resolve(targetPath, `${store}.js`);
    const targetRouterPath = path.resolve(targetPath, 'types.js');
    await Promise.all([writeToFile(targetPagePath, storeText), writeToFile(targetRouterPath, typeText)]);
    log(chalk.green(`add store successfully~`));
  }
};

module.exports = {
  createRepostoryAction,
  addComponentAction,
  addPageAndRouterAction,
  addStoreAction,
};
