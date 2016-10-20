'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.deploy = deploy;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSsh = require('gulp-ssh');

var _gulpSsh2 = _interopRequireDefault(_gulpSsh);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _gulpPrompt = require('gulp-prompt');

var _gulpPrompt2 = _interopRequireDefault(_gulpPrompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ruta = "/home/usuario/Practica4/gh-pages";
var dir_maq = "10.6.128.185";
var usuario = "usuario";

var config = {
  host: dir_maq,
  port: 22,
  username: usuario
};

var gulpSSH = new _gulpSsh2.default({
  ignoreErrors: false,
  sshConfig: config
});

function config() {
  return config;
}

function deploy(args) {
  //config = args;

  if (!config.host) {
    //pide la ip por teclado
  }

  if (!config.username) {
    //pide el usuario por teclado
  }

  _gulpPrompt2.default.prompt({
    type: 'password',
    name: 'pass',
    message: 'Please enter your password'
  }, function (res) {
    _gulpPrompt2.default.confirm('Are you ready for Gulp?');
    //value is in res.pass
  });

  //return gulpSSH
  //  .shell(['cd ' + ruta, 'git pull'])
}
