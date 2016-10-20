'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  username: usuario,
  privateKey: _fsPromise2.default.readFileSync(process.env.HOME + '/.ssh/id_rsa')
};

var gulpSSH = new _gulpSsh2.default({
  ignoreErrors: false,
  sshConfig: config
});

function deploy(args) {
  return gulpSSH.shell(['cd ' + ruta, 'git pull']);

  return through.obj(function (file, encoding, callback) {
    callback(null, doSomethingWithTheFile(file));
  });
}
