const  fs  =  requerir ( 'fs' )
const  ruta  =  requerir ( 'ruta' )
const  { generar }  =  requerir ( 'child_process' )

/**
 * Convertir audio a audio reproducible de WhatsApp
* @param { Búfer } Búfer Búfer de audio
* @param { Cadena } ext Extensión de archivo
 */
función  toAudio ( búfer ,  ext )  {
  devolver  nueva  Promesa ( ( resolver ,  rechazar )  =>  {
    sea  tmp  =  ruta . unirse ( __dirname ,  '../tmp' ,  +  nueva  fecha   +  '.'  +  ext )
    dejar  salir  =  tmp  +  '.mp3'
    fs . writeFileSync ( tmp ,  búfer )
    generar ( 'ffmpeg' ,  [
      '-y' ,
      '-i' , tmp ,
      '-vn' ,
      '-ac' ,  '2' ,
      '-b:a' , '128k' ,
      '-ar' , '44100' ,
      '-f' ,  'mp3' ,
      fuera
    ] )
    . en ( 'error' ,  rechazar )
    . en ( 'error' ,  ( )  =>  fs . unlinkSync ( tmp ) )
    . en ( 'cerrar' ,  ( )  =>  {
      fs . unlinkSync ( tmp )
      resolver ( fs . readFileSync ( fuera ) )
      if  ( fs . existe Sync ( salida ) )  fs . unlinkSync ( fuera )
    } )
  } )
}

/**
 * Convertir audio a WhatsApp PTT reproducible
* @param { Búfer } Búfer Búfer de audio
* @param { Cadena } ext Extensión de archivo
 */
función  toPTT ( búfer ,  ext )  {
  devolver  nueva  Promesa ( ( resolver ,  rechazar )  =>  {
    sea  tmp  =  ruta . unirse ( __dirname ,  '../tmp' ,  +  nueva  fecha  +  '.'  +  ext )
    dejar  salir  =  tmp  +  '.opus'
    fs . writeFileSync ( tmp ,  búfer )
    generar ( 'ffmpeg' ,  [
      '-y' ,
      '-i' , tmp ,
      '-vn' ,
      '-c:a' , 'libopo' ,
      '-b:a' , '128k' ,
      '-vbr' , 'en' ,
      '-compression_level' , '10' ,
      fuera ,
    ] )
    . en ( 'error' ,  rechazar )
    . en ( 'error' ,  ( )  =>  fs . unlinkSync ( tmp ) )
    . en ( 'cerrar' ,  ( )  =>  {
      fs . unlinkSync ( tmp )
      resolver ( fs . readFileSync ( fuera ) )
      if  ( fs . existe Sync ( salida ) )  fs . unlinkSync ( fuera )
    } )
  } )
}

/**
 * Convertir audio a video de WhatsApp reproducible
* @param { Búfer } Búfer Búfer de vídeo
* @param { Cadena } ext Extensión de archivo
 */
function  toVideo ( búfer ,  ext )  {
  devolver  nueva  Promesa ( ( resolver ,  rechazar )  =>  {
    sea  tmp  =  ruta . unirse ( __dirname ,  '../tmp' ,  +  nueva  fecha  +  '.'  +  ext )
    dejar  salir  =  tmp  +  '.mp4'
    fs . writeFileSync ( tmp ,  búfer )
    generar ( 'ffmpeg' ,  [
      '-y' ,
      '-i' ,  tmp ,
      '-c:v' , 'libx264' ,
      '-c:a' , 'aac' ,
      '-ab' , '128k' ,
      '-ar' , '44100' ,
      '-crf' ,  '32' ,
      '-preestablecido' ,  'lento' ,
      fuera
    ] )
    . en ( 'error' ,  rechazar )
    . en ( 'error' ,  ( )  =>  fs . unlinkSync ( tmp ) )
    . en ( 'cerrar' ,  ( )  =>  {
      fs . unlinkSync ( tmp )
      resolver ( fs . readFileSync ( fuera ) )
      if  ( fs . existe Sync ( salida ) )  fs . unlinkSync ( fuera )
    } )
  } )
}

módulo _ exportaciones  =  {
  a Audio ,
  aPTT ,
  aVideo
}