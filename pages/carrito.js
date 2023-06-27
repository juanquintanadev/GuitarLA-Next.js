import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/carrito.module.css'

function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        // vamos a calcular el total con el metodo reduce
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
        setTotal(calculoTotal);
    }, [carrito]);
    return (
        <Layout
            title="Carrito de compras"
        >
            <main className="contenedor"> 
                <h1 className="heading">Carrito de compras</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos agregados:</h2>
                        {carrito?.legth === 0 ?
                            'No hay elementos agregados todavia'
                        : (
                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto}> 
                                    <div>
                                        <Image src={producto.imagen} width={250} height={480} alt={producto.nombre}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                        <p className={styles.precio}>$ {producto.precio}</p>
                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <select 
                                                className={styles.select}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value,
                                                })}
                                                value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </div>
                                        <p className={styles.subtotal}>Subtotal: <span>${producto.cantidad * producto.precio}</span></p>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => eliminarProducto(producto.id)}
                                        className={styles.eliminar} 
                                    >X</button>
                                </div>
                            ))
                        ) }
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: $ {total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito