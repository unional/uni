#!/usr/bin/env node
import updateNotifier from 'update-notifier';
import { cli } from './cli';

const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

cli.parse(process.argv)
  .catch(err => {
    console.error(err)
  })
