const  tiza  =  requerir ( 'tiza' )

const  color  =  ( texto ,  color )  =>  {
    volver  ! color ? tiza _ rojo ( texto ) : tiza . palabra clave ( color ) ( texto )
}

const  bgcolor  =  ( texto ,  bgcolor )  =>  {
	volver  ! bgcolor ? tiza _ verde ( texto ) : tiza . bgPalabra clave ( bgcolor ) ( texto )
}

módulo _ exportaciones  =  {
	color ,
	bgcolor
}