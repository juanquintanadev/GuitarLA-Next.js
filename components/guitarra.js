import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

function Guitarra({guitarra}) {

    const {descripcion, imagen, nombre, precio, publishedAt, url} = guitarra
    return (
        
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.formats.small.url} width={200} height={250} alt={`imagen guitarra ${nombre}`}/>
            <div className={styles.contenido}> 
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
                <Link className={styles.enlace} href={`/guitarras/${url}`}>Ver producto</Link>
            </div>
        </div>
    )
}

export default Guitarra