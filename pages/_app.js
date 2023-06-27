import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  // aca tenemos que ver si hay algo en localstorage, si hay algo lo almacenamos sino que si inicie como arreglo vacio
  // este codigo dice que si no existe en la parte del servidor entonces asigne los items o un arreglo vacio
  // local storage funciona en la parte del navegador pero no en el servidor y next funciona en ambos lados
  // json.parse convierte a un arreglo lo del localStorage 
  const carritoLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  // knoleadge collesion por si no existe el carrito vacio
  console.log(carritoLs)
  const [carrito, setCarrito] = useState(carritoLs)

  // hidratacion con esto vamos a cargar un useefect para cuando este lista la pagina
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }, [carrito])
  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = guitarra => {
  const carritoActualizado = carrito.map( guitarraState => {
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = parseInt( guitarra.cantidad )
    } 
    return guitarraState
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}
  return paginaLista ? <Component 
    {...pageProps} 
    carrito = {carrito}
    agregarCarrito = {agregarCarrito}
    actualizarCantidad = {actualizarCantidad}
    eliminarProducto = {eliminarProducto}
  /> : null
}

export default MyApp
