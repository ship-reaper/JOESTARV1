// Filtros de mensajes / Enfriamientos de mensajes
const  usedCommandRecently  =  new  Set ( ) ;

const  isFiltered  =  ( de )  =>  {
    volver  ! ! usedCommandRecently . tiene ( de ) ;
} ;

const  añadirFiltro  =  ( desde )  =>  {
    usedCommandRecently . añadir ( desde ) ;
    establecerTiempo de espera ( ( )  =>  {
        devuelve  usedCommandRecently . eliminar ( de ) ;
    } ,  1000 ) ; // 3 segundos es un retraso antes de procesar el siguiente comando;
} ;
módulo _ exportaciones  =  {
    filtro de mensaje : {
        está filtrado ,
        Añadir filtro
    } } ;