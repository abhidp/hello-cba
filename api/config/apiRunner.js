const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');
const mochaOptions = require('./mochaConfig');
const mocha = new Mocha(mochaOptions);
const testDir = 'api/specs';
require('dotenv').config();

fs.readdirSync(testDir)
  .filter(function (file) {
    return path.extname(file) === '.ts';
  })
  .forEach(function (file) {
    mocha.addFile(path.join(testDir, file));
  });

mocha.run();
