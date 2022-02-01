const  fs  =  requerir ( "fs" ) ;
const  Grupo  =  JSON . analizar ( fs . readFileSync ( './database/group.json' ) ) ;

/**
* agregar grupo de datos a la base de datos
* @param { cadena } id
*/
const  agregarGrupo  =  ( id )  =>  {
  dejar  posición  =  falso ;
    objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  verdadero ;
    }
  } ) ;
    si  ( posición  ===  falso )  {
      constante  obj  =  { 
          de : identificación , 
          fuera de línea : falso , 
          bienvenido : falso , 
          antienlace : falso ,
          mala palabra : falso ,
          antidelete : falso ,
          detectar : falso ,
          viewOnce : falso ,
        } ;
        grupo _ empujar ( obj ) ;
        fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
        devolver  falso ;
    }
} ;

/**
* Verifique los datos fuera de línea en la base de datos
* @param { cadena } id
*/
const  cekOffline  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . fuera de línea ;
    }
} ;

/**
* cambiar el estado fuera de linea a la base de datos
* @param { cadena } id
*/
const  agregarFuera de línea  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . sin conexión  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* cambiar el estado fuera de linea a la base de datos
* @param { cadena } id
*/
const  delOffline  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . fuera de línea  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* Consulta los datos de bienvenida en la base de datos.
* @param { cadena } id
*/
const  cekBienvenido  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . bienvenido _
    }
} ;

/**
* cambiar el estado de bienvenida a la base de datos
* @param { cadena } id
*/
const  agregarBienvenido  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . bienvenido  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* cambiar el estado de bienvenida a la base de datos
* @param { cadena } id
*/
const  delBienvenido  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . bienvenido  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;
/**
* Comprobar detectar datos en la base de datos
* @param { cadena } id
*/
const  cekDetect  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . detectar ;
    }
} ;

/**
 * cambiar el estado de deteccion en la base de datos
* @param { cadena } id
*/
const  addDetect  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ puesto ] . detectar  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado de deteccion en la base de datos
* @param { cadena } id
*/
const  delDetect  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ puesto ] . detectar  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * Verifique los datos antienlace en la base de datos
* @param { cadena } id
*/
const  cekAntilink  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . antienlace ;
    }
} ;

/**
 * cambiar el estado de antienlace a la base de datos
* @param { cadena } id
*/
const  addAntilink  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ puesto ] . antienlace  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * cambiar el estado de antienlace a la base de datos
* @param { cadena } id
*/
const  del Antienlace  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ puesto ] . antienlace  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
 * Verifique los datos de palabras incorrectas en la base de datos
* @param { cadena } id
*/
const  cekBadword  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . mala palabra ;
    }
} ;

/**
* cambiar el estado de badword en la base de datos
* @param { cadena } id
*/
const  agregarBadword  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . mala palabra  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* cambiar el estado de badword en la base de datos
* @param { cadena } id
*/
const  delBadword  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . mala palabra  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* Verifique los datos antidelete en la base de datos
* @param { cadena } id
*/
const  cekAntidelete  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . antiborrado ;
    }
} ;

/**
* cambiar el estado antidelete a la base de datos
* @param { cadena } id
*/
const  addAntidelete  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . antidelete  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* cambiar el estado antidelete a la base de datos
* @param { cadena } id
*/
const  del Antidelete  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . antidelete  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* Verifique los datos anti viewOnce en la base de datos
* @param { cadena } id
*/
const  cekViewonce  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    volver  Grupo [ posición ] . ver una vez ;
    }
} ;

/**
* cambiar el estado anti viewOnce a la base de datos
* @param { cadena } id
*/
const  addViewonce  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . verOnce  =  verdadero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ;

/**
* cambiar el estado antidelete a la base de datos
* @param { cadena } id
*/
const  delViewonce  =  ( id )  =>  {
  dejar  posición  =  falso ;
  objeto _ teclas ( Grupo ) . paraCada ( ( i )  =>  {
    if  ( Grupo [ i ] . de  ===  id )  {
      posición  =  yo ;
    }
  } ) ;
  if  ( posición  !==  falso )  {
    Grupo [ posición ] . verOnce  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Grupo ,  nulo ,  "\t" ) ) ;
  }
} ; 

módulo _ exportaciones  =  {
  grupo ,
  agregargrupo ,
  agregar sin conexión ,
  delDesconectado ,
  cek sin conexión ,
  añadirBienvenido ,
  delBienvenido ,
  cekBienvenido ,
  añadir Antienlace ,
  delAntilink ,
  cekAntilink ,
  añadirBadword ,
  delBadword ,
  cekBadword ,
  agregar Antidelete ,
  delAntidelete ,
  cekAntidelete ,
  agregarDetectar ,
  delDetectar ,
  cekDetect ,
  agregarVeruna vez ,
  delViewonce ,
  cekViewonce
} ;