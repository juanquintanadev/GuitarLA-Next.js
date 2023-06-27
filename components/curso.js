import styles from '../styles/curso.module.css'
import { formatearFecha } from "../utils/helpers"

function Curso({curso}) {
    const {contenido, imagen, titulo, createdAt} = curso
    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>
                {`
                    .curso {
                        background-image: linear-gradient(to right, rgb(0 0 0 / .5), rgb(0 0 0 / .9)), url(${imagen.data[0].attributes.url});
                    }
                `}
            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                    <p>{formatearFecha(createdAt)}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso