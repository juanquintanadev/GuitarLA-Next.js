import Image from "next/image"
import styles from '../styles/nosotros.module.css'
import Layout from "../components/layout"

function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, todo lo que somos con la musica'}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={'/img/nosotros.jpg'} alt="imagen nosotros" width={500} height={500}/>
          <p>Morbi eu sapien nec diam malesuada dictum vitae vitae urna. Morbi luctus arcu pulvinar, dictum mauris nec, ullamcorper tellus. Praesent bibendum nibh quis magna rutrum, a lobortis sapien vulputate. Cras vulputate, nibh non consectetur consectetur, sem nisl dignissim ante, id bibendum orci dui in sapien. Aliquam fermentum nunc felis, quis imperdiet ex varius et. Vestibulum convallis, ipsum tincidunt molestie gravida, sapien nibh commodo dui, et blandit turpis erat blandit mi.</p>
        </div>
      </main>
      
    </Layout>
  )
}

export default Nosotros