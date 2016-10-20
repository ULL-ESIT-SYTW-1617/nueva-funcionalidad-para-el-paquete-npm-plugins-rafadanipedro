'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deploy = undefined;

var deploy = exports.deploy = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var gulpSSH;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            exports.config = config = args;

            if (config.host) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return pedirTeclado("host");

          case 4:
            config.host = _context.sent;

          case 5:
            if (config.username) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return pedirTeclado("username");

          case 8:
            config.username = _context.sent;

          case 9:
            if (config.path) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return pedirTeclado("path");

          case 12:
            config.path = _context.sent;

          case 13:
            _context.next = 15;
            return pedirTeclado("password", true);

          case 15:
            config.password = _context.sent;
            gulpSSH = new _gulpSsh2.default({
              ignoreErrors: false,
              sshConfig: config
            });
            return _context.abrupt('return', gulpSSH.shell(['cd ' + config.host, 'git pull'], { filePath: 'shell.log' }).pipe(_gulp2.default.dest('logs')).on('end', function () {
              exports.config = config = null;console.log(_fsPromise2.default.readFileSync('./logs/shell.log').toString());
            }));

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function deploy(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.config = config;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSsh = require('gulp-ssh');

var _gulpSsh2 = _interopRequireDefault(_gulpSsh);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _gulpDebug = require('gulp-debug');

var _gulpDebug2 = _interopRequireDefault(_gulpDebug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var config = require('./config.json');

_prompt2.default.start();

function config() {
  return config;
}

function pedirTeclado(chuchu, hidden) {
  return new Promise(function (resolve, reject) {
    _prompt2.default.get([{
      name: chuchu,
      hidden: hidden,
      required: true
    }], function (err, result) {
      if (err) return reject(err);
      resolve(result[chuchu]);
    });
  });
}
