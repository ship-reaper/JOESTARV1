const  cfonts  =  require ( 'cfonts' ) ;
const  spin  =  require ( 'spinnies' ) ;
const  Cripto  =  requerir ( 'cripto' ) ;
const  moment  =  require ( "moment-timezone" ) ;
const  fs  =  require ( 'fs' ) ;
const  { spawn }  =  require ( "child_process" ) ;

/** -- función
* enlace detectado
*/
const  esUrl  =  ( url )  =>  {
        URL de retorno . partido (
        nueva  expresión regular (
          / https?: \/ \/ ( www \. ) ? [ -a-zA-Z0-9@:%.+~#= ] { 1256 } \. [ a-zA-Z0-9() ] { 1,6 } \b ( [ -a-zA-Z0-9()@:%+.~#?&/= ] * ) / ,
          "soldado americano"
        )
      ) ;
    } ;


función  elegir al azar ( lista )  {
   lista de retorno [ Math . piso ( matemáticas . aleatorio ( )  *  lista . longitud ) ] ;
}

/**
 * formato de reloj
*/
constante  kyun  =  ( s )  => {
     panel de función ( s )  {
        retorno  ( s  <  10 ? '0' : '' )  +  s ;
    }
    var  horas  =  Matemáticas . piso ( s  /  ( 60  *  60 ) ) ;
    var  minutos  =  Matemáticas . piso ( s  %  ( 60  *  60 )  /  60 ) ;
    var  segundos  =  matemáticas . piso ( s  %  60 ) ;
    return  ` ${ pad ( horas ) } : ${ pad ( minutos ) } : ${ pad ( segundos ) } ` ;
} ;


/**
 * Mención de día y fecha
 */
     sea  d  =  nueva  Fecha ( ) ;
     let  configuración regional  =  "es" ;
     let  gmt  =  nueva  Fecha ( 0 ) . getTime ( )  -  nueva  fecha ( "1 de enero de 1970" ) . obtenerHora ( ) ;
     let  weton  =  [ " " ,  " " ,  " " ,  " " ,  " " ] [
      matemáticas _ piso ( ( d  *  1  +  gmt )  /  84600000 )  %  5
    ] ; 
     Sea  semana  =  d . toLocaleDateString ( configuración regional ,  { día de la  semana : "largo"  } ) ;
     sea  fecha  =  d . toLocaleDateString ( configuración regional ,  {
      día : "numérico" ,
      mes : "largo" ,
      año : "numérico" ,
    } ) ;
     Sea  waktu  =  d . toLocaleDateString ( configuración regional ,  {
      hora : "numérico" ,
      minuto : "numérico" ,
      segundo : "numérico" ,
    } ) ;
     let  tanggal  =  semana  +  " "  +  weton  +  ", "  +  fecha ;

/**
 * 
 */
     constante  tiempo  =  momento ( ) . tz ( "América/La_Paz" ) . formato ( "HH:mm:ss" ) ;
     const  WIB  =  momento ( ) . tz ( "América/La_Paz" ) . formato ( "HH:mm:ss" ) ;
     const  WIT  =  momento ( ) . tz ( "América/La_Paz" ) . formato ( "HH:mm:ss" ) ;
     const  WITA  =  momento ( ) . tz ( "América/La_Paz" ) . formato ( "HH:mm:ss" ) ;
    
/**
* Mencionando el número miles y así sucesivamente
 */
const  h2k  =  ( número )  =>  {
    var  SI_POSTFIXES  =  [ "" ,  "K" ,  "M" ,  "G" ,  "T" ,  "P" ,  "E" ] ;
    var  nivel  =  Matemáticas . log10 ( Matemáticas . abs ( número ) )  /  3  |  0 ;
    if ( nivel  ==  0 )  número de retorno  ;
    var  postfijo  =  SI_POSTFIXES [ nivel ] ;
    var  escala  =  Matemáticas . pow ( 10 ,  nivel  *  3 ) ;
    var  escalado  =  numero  /  escala ;
    var  formateado  =  escalado . aFijo ( 1 )  +  '' ;
    if  ( / \. 0 $ / . prueba ( formateada ) ) ;
      formateado  =  formateado . substr ( 0 ,  formateado.longitud - 2 ) ; _ _  
    retorno  formateado  +  sufijo ;
} ;

/**
* pegatina marca de agua
*/
const  createExif  =  ( paquete ,  autenticación )  => {
     código  constante =  [ 0x00 , 0x00 , 0x16 , 0x00 , 0x00 , 0x00 ] ;
    const  exif  =  { "id del paquete de calcomanías" : "com.client.tech" ,  "nombre del paquete de calcomanías" : paquete ,  "editor del paquete de calcomanías" : auth ,  "enlace de la tienda de aplicaciones de Android" : "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp" ,  "ios-app-store-link" : "https://itunes.apple.com/app/sticker -maker-studio/id1443326857" } ;
    dejar  len  =  JSON . stringify ( exif ) . longitud ;
    si  ( largo  >  256 )  {
        largo  =  largo  -  256 ;
        código _ anular cambios ( 0x01 ) ;
    }  más  {
        código _ cancelar el cambio ( 0x00 ) ;
    }
    si  ( largo  <  16 )  {
        len  =  len . a la Cadena ( 16 ) ;
        largo  =  "0"  +  largo ;
    }  más  {
        len  =  len . a la Cadena ( 16 ) ;
    }
    const  _  =  Búfer . de ( [ 0x49 ,  0x49 ,  0x2A ,  0x00 ,  0x08 ,  0x00 ,  0x00 ,  0x00 ,  0x01 ,  0x00 ,  0x41 ,  0x57 ,  0x07 ,  0x00 ] ) ;
    const__  = Búfer . _  de ( len , "hexadecimal" ) ;  
    const___  = Búfer . _  de ( código ) ; 
    const____  = Búfer . _  de ( JSON . stringify ( exif ) ) ; 
    fs . writeFileSync ( './temp/data.exif' ,  Buffer . concat ( [ _ ,  __ ,  ___ ,  ____ ] ) ,  function  ( err )  {
        consola _ registro ( err ) ;
        si  ( err )  devuelva  la consola . error ( errar ) ;
        devolver  `./temp/data.exif` ;
    } ) ;
} ;


const  modStick  =  ( medios ,  cliente ,  mek ,  de )  =>  {
    fuera  =  getRandom ( '.webp' ) ;
    prueba  {
        generar ( 'webpmux' ,  [ ' -set' , 'exif' ,  './temp/data.exif' ,  medios ,  '-o' ,  fuera ] )
        . en ( 'salir' ,  ( )  =>  {
            cliente _ sendMessage ( desde ,  fs . readFileSync ( fuera ) ,  'stickerMessage' ,  { citado : mek } ) ;
            fs . unlinkSync ( fuera ) ;
            fs . unlinkSync ( medios ) ;
        } ) ;
    }  atrapar  ( e )  {
        consola _ registro ( e ) ;
        cliente _ sendMessage ( from ,  'Ocurrió un error' ,  'conversation' ,  {  citado : mek  } ) ;
        fs . unlinkSync ( medios ) ;
    }
} ;



const  randomBytes  =  ( longitud )  =>  {
    devolver  Cripto . randomBytes ( longitud ) ;
} ;

const  generarMessageID  =  ( )  =>  {
    devuelve  bytes aleatorios ( 6 ) . toString ( 'hexadecimal' ) . a Mayúsculas ( ) ;
} ;

const  getGroupAdmins  =  ( participantes )  =>  {
	administradores  =  [ ] ;
	para  ( sea  i  de  participantes )  {
		yo _ esAdmin ? administradores _ empujar ( i . jid ) : '' ;
	}
	 administradores de retorno ;
} ;

const  getRandom  =  ( ext )  =>  {
	devuelve  ` ${ Matemáticas . piso ( Matemáticas . aleatorio ( )  *  10000 ) } ${ ext } ` ;
} ;

módulo _ exportaciones  =  {
  crearExif ,
  palo mod ,
  h2k ,
  es URL ,
  elegir al azar ,
  generarMessageID , 
  getGroupAdmins , 
  obtener al azar ,
  kyun ,
  tiempo ,
  WIB ,
  WITA ,
  ingenio ,
  mojado ,
  semana ,
  fecha ,
  waktu ,
  Tanggal
}