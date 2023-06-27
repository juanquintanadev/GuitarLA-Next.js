import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "../../utils/helpers";

function Blog({ post }) {
  const {titulo, contenido, publishedAt, imagen} = post
  return (
        <Layout
            title="Guitaras post"
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.formats.medium.url} alt="imagen post" width={1000} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.texto}>{contenido}</p>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <Link href='/blog' className={styles.enlace}>Volver</Link>
            </div>
            </article>
        </Layout>
    );
}

// forma estatica para este tipo de paginas que solamente se actualizan en el build, no dinamicamente, este return va a StaticProps y luego al componente
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/posts`);
  const { data } = await respuesta.json();
//   console.log(data)
  const paths = data.map(post => ({
    params: {
      url: post.attributes.url
    }
  }))
//   console.log(paths)
  return {
    paths,
    fallback: false, // esto te muestra un cartel de 404 si no encuentra lo q busca
    
  };
}
// es obligatoria la funcion getStaticPaths, como en este caso tenemos routing dinamico la requerimos
export async function getStaticProps({params : {url}}) {
    console.log(url)
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
  const { data } = await respuesta.json();
  return {
    props: {
      post: data[0].attributes,
    },
  };
}

export default Blog;
