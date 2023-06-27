import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import carrito from '../public/img/carrito.png'

function Header() {

    const router = useRouter()
    return (
            <header className={styles.header}>
                <div className={`contenedor ${styles.barra}`}>
                    <Link  href='/' legacyBehavior>
                            <Image className={styles.logo} src='/img/logo.svg' alt='Imagen Logo' width={300} height={40}/>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link className={router.pathname === '/' ? styles.active : ''} href='/'>Inicio</Link>

                        <Link className={router.pathname === '/nosotros' ? styles.active : ''} href='/nosotros'>Nosotros</Link>

                        <Link className={router.pathname === '/blog' ? styles.active : ''} href='/blog'>Blog</Link>

                        <Link className={router.pathname === '/tienda' ? styles.active : ''} href='/tienda'>Tienda</Link>

                        <Link href='/carrito'>
                            <Image src={carrito} alt='Imagen carrito' width={30} height={30}/>
                        </Link>
                    </nav>
                </div>
            </header>
        )
}

export default Header