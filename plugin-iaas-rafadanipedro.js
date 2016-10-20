import gulp from 'gulp'
import GulpSSH from 'gulp-ssh'
import fs from 'fs-promise'

let ruta = "/home/usuario/Practica4/gh-pages"
let dir_maq = "10.6.128.185"
let usuario = "usuario"

var config = {
  host: dir_maq,
  port: 22,
  username: usuario,
  privateKey: fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

export default function deploy(args) {
  return gulpSSH
    .shell(['cd ' + ruta, 'git pull'])

  return through.obj(function(file, encoding, callback) {
    callback(null, doSomethingWithTheFile(file));
  });
}

function doSomethingWithTheFile(file) {
  console.log(file.path)
}
