import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

// en este caso la ruta que ponemos en el routing dinamico aparece en el router dentro de query y lo que tenemos entre el corchete es como aparece

// router.query.url <- este url es lo q esta entre el corchete
function Producto({ guitarra, agregarCarrito, eliminarCarrito, actualizarCarrito }) {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;
  function handleSubmit(e) {
    e.preventDefault();
    if(cantidad < 1) {
      alert('Cantidad no válida');
      return;
    };

    // tenemos que armar un objeto con la guitarra seleccionada
    const guitarraSeleccionada = {
      id : guitarra[0].id,
      nombre,
      precio,
      cantidad,
      imagen : imagen.data.attributes.formats.small.url,
    };

    // vamos a pasarle la informacion al context
    agregarCarrito(guitarraSeleccionada);
  };
  return (
    <Layout title={`Guitarra: ${nombre}`} description={"La guitarra que estas buscando"}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.formats.small.url}
          width={200}
          height={250}
          alt={`imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>$ {precio}</p>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Seleccione cantidad</label>
            <select 
              onChange={e => parseInt(setCantidad(e.target.value))}
              id="cantidad"
              value={cantidad}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input className={styles.enlace} type="submit" value='Agregar al carrito'/>
          </form>
          <Link className={styles.enlace} href="/tienda">
            Vovler
          </Link>
        </div>
      </div>
    </Layout>
  );
}



// datos es lo que se pasa automaticamente en getServerSideProps, tipo de metodo, url completa,
// lo que nos interesa de esta informacion es la parte de query o params, que reportan mas o menos lo mismo
export async function getServerSideProps({query : {url}}) {

  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data } = await respuesta.json();
  return {
    props: {
      guitarra: data,
    },
  };
}

export default Producto;
