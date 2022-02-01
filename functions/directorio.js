const  fs  =  require ( 'fs' ) ;
vamos  directo  =  JSON . analizar ( fs . readFileSync ( './database/directory.json' ) ) ;

/**
 * agregue el nombre del archivo de imagen almacenado en la base de datos
* @param { cadena } valor
*/
const  agregarImagen  =  ( valor )  =>  {
  texto  =  valor ;
  dirección _ imagen _ empujar ( texto ) ;
  fs . writeFileSync ( './database/directory.json' ,  JSON . stringify ( direct ,  null ,  '\t' ) ) ;
} ;

/**
* agregue el nombre del archivo de video almacenado en la base de datos
* @param { cadena } valor
*/
const  agregarVideo  =  ( valor )  =>  {
  texto  =  valor ;
  dirección _ vídeo _ empujar ( texto ) ;
  fs . writeFileSync ( './database/directory.json' ,  JSON . stringify ( direct ,  null ,  '\t' ) ) ;
} ;

/**
* agregue el nombre del archivo de audio almacenado en la base de datos
* @param { cadena } valor
*/
const  agregarAudio  =  ( valor )  =>  {
  texto  =  valor ;
  dirección _ sonido _ empujar ( texto ) ;
  fs . writeFileSync ( './database/directory.json' ,  JSON . stringify ( direct ,  null ,  '\t' ) ) ;
} ;

/**
 * agregue el nombre del archivo de la etiqueta almacenada en la base de datos
* @param { cadena } valor
*/
const  addStiker  =  ( valor )  =>  {
  texto  =  valor ;
  dirección _ pegatina  _ empujar ( texto ) ;
  fs . writeFileSync ( './database/directory.json' ,  JSON . stringify ( direct ,  null ,  '\t' ) ) ;
} ;

const  agregarInforme  =  ( id ,  valor )  =>  {
  texto  =  valor ;
  objeto  =  {
    identificación : identificación ,
    informe : valor
  } ;
  dirección _ informe _ empujar ( obj ) ;
  fs . writeFileSync ( './database/directory.json' ,  JSON . stringify ( direct ,  null ,  '\t' ) ) ;
} ;

módulo _ exportaciones  =  {
  dirección ,
  agregarImagen ,
  agregarVideo ,
  agregarStiker ,
  añadir audio , 
  agregar informe , 
  añadirReportar
} ;