const  fs  =  requerir ( "fs" ) ;
const  Usuario  =  JSON . analizar ( fs . readFileSync ( './database/user.json' ) ) ;

/**
* agregar datos de usuario a la base de datos
* @param { cadena } id
*/
const  agregarUsuario  =  ( id )  =>  {
  dejar  posición  =  falso ;
    objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  verdadero ;
    }
  } ) ;
    si  ( posición  ===  falso )  {
      constante  obj  =  { 
          identificación : identificación , 
          nombre : '-' , 
          idioma : "español" ,
          registro : falso ,
          prima : falso , 
          prohibido : falso ,
          afk : falso ,
          afkRazón : '-' ,
          afkTime : '-' ,
          punto : 0 ,
          nivel : 0 ,
          advertir : 0 ,
        } ;
        usuario _ empujar ( obj ) ;
        fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
        devolver  falso ;
    }
} ;

/**
 * Verifique los datos de usuarios prohibidos en la base de datos
* @param { cadena } id
*/
const  cekRegis  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . registrarse ;
    }
} ;

/**
 * cambiar el estado del usuario prohibido en la base de datos
* @param { cadena } id
*/
const  agregarRegistro  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . registro  =  verdadero ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;
/**
 * Verifique los datos de usuarios prohibidos en la base de datos
* @param { cadena } id
*/
const  cekBanned  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . prohibido ;
    }
} ;

/**
 * cambiar el estado del usuario prohibido en la base de datos
* @param { cadena } id
*/
const  addBanned  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . prohibido  =  verdadero ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado del usuario prohibido en la base de datos
* @param { cadena } id
*/
const  delBanned  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . prohibido  =  falso ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* Verifique los datos de usuario premium en la base de datos
* @param { cadena } id
*/
const  cekPremium  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . prima ;
    }
} ;


/**
 * cambiar el estado del usuario premium a la base de datos
* @param { cadena } id
*/
const  agregarPremium  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . prima  =  verdadero ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado del usuario premium a la base de datos
* @param { cadena } id
*/
const  delPremium  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . prima  =  falso ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* Verifique los datos de usuario premium en la base de datos
* @param { cadena } id
*/
const  cekChatbot  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . chatbot ;
    }
} ;


/**
 * cambiar el estado del usuario del chatbot a la base de datos
* @param { cadena } id
*/
const  agregarChatbot  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . chatbot  =  verdadero ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado del usuario del chatbot a la base de datos
* @param { cadena } id
*/
const  delChatbot  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . chatbot  =  falso ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * Base de datos dalam del usuario del punto de datos de Cek
* @param { cadena } id
*/
const  cekPunto  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . punto ;
    }
} ;

/**
 * agregar puntos a la base de datos del usuario
* @param {cadena } id
*/
const  agregarPunto  =  ( id ,  valor )  =>  {
  dejar  posición  =  falso ;
  si ( ! valor )  {
    valor  =  1 ;
  }
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . punto  +=  valor ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * punto de reducción
* @param { cadena } id
*/
const  delPunto  =  ( id ,  valor )  =>  {
  dejar  posición  =  falso ;
  si ( ! valor )  {
    valor  =  1 ;
  }
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . punto  -=  valor ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;


/**
 * Verifique los datos de nivel de usuario en la base de datos
* @param { cadena } id
*/
const  cekLevel  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . nivel ;
    }
} ;

/**
 * nivel agregar a la base de datos del usuario
* @param { cadena } id
*/
const  añadirNivel  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . nivel  +=  1 ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * Verifique los datos de afk del usuario en la base de datos
* @param { cadena } id
*/
const  cekAfk  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . afk ;
    }
} ;

/**
 * Verifique los datos de afk del usuario en la base de datos
* @param { cadena } id
*/
const  cekAfkReason  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . afkRazón ;
    }
} ;

/**
 * Verifique los datos de afk del usuario en la base de datos
* @param { cadena } id
*/
const  cekAfkTime  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . afkTime ;
    }
} ;


/**
* agregar datos afk a la base de datos del usuario
* @param { cadena } id
* @param { Objeto } fecha
* @param { Objeto } motivo
*/
const  addAfk  =  ( id ,  tanggal ,  alasan )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . afk  =  verdadero ;
    Usuario [ posición ] . afkRazón  =  alasan ;
    Usuario [ posición ] . afkTime  =  tanggal ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* eliminar datos de afk en la base de datos del usuario
* @param { cadena } id
*/
const  delAfk  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . afk  =  falso ;
    Usuario [ posición ] . afkRazón  =  "-" ;
    Usuario [ posición ] . afkTime  =  "-" ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * Verifique los datos de usuarios prohibidos en la base de datos
* @param { cadena } id
*/
const  cekWarn  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . advertir ;
    }
} ;

/**
 * cambiar el estado del usuario prohibido en la base de datos
* @param { cadena } id
*/
const  añadirAdvertencia  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . advertir  +=  1
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado del usuario prohibido en la base de datos
* @param { cadena } id
* @param { número } Monto
*/
const  delWarn  =  ( id ,  jumlah )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . advertir  -=  jumlah ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;


/**
 * Verifique todos los datos del usuario en la base de datos
* @param { cadena } id
*/
const  cekUser  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    resultado  =  {
      id : Usuario [ posición ] . identificación , 
      prima : Usuario [ posición ] . prima , 
      baneado : Usuario [ posición ] . prohibido ,
      afk : Usuario [ posición ] . afk ,
      afkReason : Usuario [ posición ] . Razón afk ,
      afkTime : Usuario [ posición ] . tiempo de afk ,
      punto : Usuario [ posición ] . punto ,
      nivel : Usuario [ cargo ] . nivel ,
      advertir : Usuario [ posición ] . advertir ,
    } ;
     resultado devuelto ;
    }
} ;


/**
 * Verifique los datos del idioma del usuario en la base de datos
* @param { cadena } id
*/
const  cekBahasa  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Usuario [ posición ] . idioma
    }
} ;


/**
* Verifique los datos del idioma del usuario en la base de datos
* @param { cadena } id
* @param { Objeto } idioma
*/
const  addBahasa  =  ( id ,  bahasa )  =>  {
  dejar  posición  =  falso ;
  objeto _ claves ( Usuario ) . paraCada ( ( i )  =>  {
    if  ( Usuario [ i ] . id  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Usuario [ posición ] . idioma  =  bahasa ;
    fs . writeFileSync ( './base de datos/usuario.json' ,  JSON . stringify ( Usuario ,  nulo ,  "\t" ) ) ;
  }
} ;


módulo _ exportaciones  =  {
  usuario , 
  cekRegis ,
  agregarRegistro ,
  añadirUsuario , 
  cekUser ,
  punto de cek , 
  añadirpunto , 
  del Punto , 
  añadirNivel ,
  cekLevel ,
  cekprohibido , 
  agregar Prohibido , 
  del Prohibido ,
  cekpremium ,
  añadirPremium ,
  delPremium ,
  agregarChatbot ,
  delChatbot ,
  cekchatbot ,
  añadirAfk ,
  Del Afk ,
  CekAfk ,
  cekAfkReason ,
  cekAfkTime ,
  añadirAdvertencia ,
  delaviso ,
  cekWarn ,
  añadirBahasa ,
  cekBahasa
 } ;
 
 /**
  * todas las funciones no son perfectas, si encuentra errores / errores por escrito, corrijalo
  * @Joestar ._
  */