import Guitarra from "../components/guitarra"
import Layout from "../components/layout"
import styles from "../styles/grid.module.css"

function Tienda({guitarras}) {

  return (
    <Layout
      title={'Tienda'}
      description={'Todos los articulos disponibles'}
    >
      <main className="contenedor">
        <h2 className="heading">Tienda Virtual</h2>
        <div className={styles.grid}>
          {guitarras?.length > 0 && guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>

    </Layout>
  )
}

// esta informacion no se va a regenerar todo el tiempo
// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default Tienda