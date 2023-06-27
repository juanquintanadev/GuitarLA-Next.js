import Guitarra from "../components/guitarra"
import Post from "../components/post"
import Curso from "../components/curso"
import styles from '../styles/grid.module.css'
import Link from "next/link"
import Layout from "../components/layout"

export default function Home({guitarras, posts, curso}) {
  return (
    <Layout
      title={'Tienda'}
      description={'Todos los articulos disponibles'}
    >
      <main className="contenedor">
        <h1 className="heading">Tienda Virtual</h1>
        <div className={styles.grid}>
          {guitarras?.length > 0 && guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
      <Curso
        curso={curso.attributes}
      />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.length && posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [respuestaGuitarras, respuestaPosts, respuestaCurso] = await Promise.all([
    fetch(urlGuitarras), 
    fetch(urlPost), 
    fetch(urlCurso),
  ]);

  // siempre la cosulta retorna un data y luego le asignamos otro nombre para poder pasarlo como props
  const [{data : guitarras}, {data : posts}, {data : curso}] = await Promise.all([
    respuestaGuitarras.json(), 
    respuestaPosts.json(),
    respuestaCurso.json(),
  ])
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}
