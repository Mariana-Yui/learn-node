#! /usr/bin/env node
const { program } = require('commander');
const { version } = require('./package.json');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

program.version(version, '-v, --version'); // 只能满足两个

helpOptions();
createCommands();

program.parse(process.argv);
