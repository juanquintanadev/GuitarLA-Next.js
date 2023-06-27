import Layout from "../components/layout"
import Link from 'next/link'

function Pagina404() {
  return (
    <Layout title="Pagina no enctrada">
        <p className="error">Error 404 Pagina no encontrada</p>
        <Link className="error-enlace" href="/tienda">
            Vovler  
        </Link>
    </Layout>
  )
}

export default Pagina404