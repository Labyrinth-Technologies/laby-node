#!/usr/bin/env node

const { program } = require('commander');
const { runSimulations } = require('./simulations');

program
  .version('0.1.0')
  .description('A CLI tool for running simulations');

program
  .command('run')
  .description('Run simulations')
  .action(() => {
    console.log('Running simulations...');
    runSimulations();
});

program.parse(process.argv);