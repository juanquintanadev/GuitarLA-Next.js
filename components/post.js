import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css";


function Post({ post }) {
  const { titulo, contenido, imagen, url, publishedAt } = post;
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} alt="imagen post" width={600} height={400} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.resumen}>{contenido}</p>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Post;
