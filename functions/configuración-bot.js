const  fs  =  require ( 'fs' ) ;

constante  st  =  JSON . analizar ( fs . readFileSync ( './database/setting-bot.json' ) ) ;

/**
* Agregar un nuevo nombre de bot
* @param { Objeto } valor
*/
const  agregarNombre  =  ( valor )  =>  {
st . nombre  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
* agregar un nuevo autor del bot a la base de datos
* @param { Objeto } valor
*/
const  agregarAutor  =  ( valor )  =>  {
st . autor  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
* nuevo agregar nombre de paquete de bot
* @param { Objeto } valor
*/
const  addPackname  =  ( valor )  =>  {
st . nombre del paquete  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
 * agregar nuevo wm de bot 
* @param { Objeto } valor
*/
const  sumarWm  =  ( valor )  =>  {
st . wm  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
 * nivel agregar punto juego de bot
* @param { Número } valor
*/
const  addPoingame  =  ( valor )  =>  {
st . puntoJuego  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
* nuevo agregar tiempo de juego de bot
* @param { Número } valor
*/
const  sumaTiempoJuego  =  ( valor )  =>  {
st . juegoWaktu  =  valor ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;

/**
 * agregar bot publico de estado a la base de datos
* @param { Booleano } verdadero
*/
const  sumaCmd  =  ( )  =>  {
st . comandototal  +=  1 ;
fs . writeFileSync ( './database/setting-bot.json' ,  JSON . stringify ( st ,  null ,  "\t" ) ) ;
} ;


módulo _ exportaciones  =  {
  st ,
  añadirNombre ,
  añadirAutor ,
  agregarnombre del paquete ,
  añadirWm ,
  agregartiempo de juego ,
  addPoinggame ,
  añadirCmd
} ;