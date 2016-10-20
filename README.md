# Plugin para el despliegue en IAAS. Práctica 4 de SYTW

En esta práctica utilizaremos dos repositorios para poder publicar un libro de Gitbook, desplegándolo en un servidor del IAAS de manera automática. El otro repositorio se encuentra en el [siguiente enlace](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-rafadanipedro).

Con el otro repositorio se generará un Gitbook y este será para crear un plugin de manera que se pueda desplegar el libro donde nosotros queramos y como nosotros queramos.

## Uso del plugin
Una vez tengamos el otro paquete, las configuraciones para realizar la conexión con el servidor del IAAS las pondremos con argumentos a la hora de ejecutar el paquete con:
`gitbook-start --deploy`

Las opciones disponibles son:
* `--host: indica la dirección de la máquina`
* `--path: indica la ruta del directorio donde se encuentran las gh-pages del libro`
* `--username: indica el usuario con el que nos conectaremos a la máquina`

Si no introducimos ninguno de estos argumentos, ese se pedirá por pantalla. La contraseña del usuario del usuario del servidor se pedirá siempre por pantalla a la hora de realizar la conexión.

## Enlace al paquete en npm
* [Paquete publicado en npm](https://www.npmjs.com/package/plugin-iaas-rafadanipedro)

## Descripción de la práctica
 * [Gitbook de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)

## Páginas personales

Pinchando sobre las imágenes podrás acceder a nuestras páginas personales.

<a href='https://rafaherrero.github.io' target='_blank'><img src='https://avatars2.githubusercontent.com/u/11819652?v=3&s=400' border='0' alt='postimage' width='100px'/></a> <a href='https://danielramosacosta.github.io/' target='_blank'><img src='https://avatars2.githubusercontent.com/u/11427028?v=3&s=400' border='0' alt='postimage' width='100px'/></a> <a href='https://alu0100505078.github.io/' target='_blank'><img src='https://avatars3.githubusercontent.com/u/14938442?v=3&s=400' border='0' alt='postimage' width='100px'/></a>
