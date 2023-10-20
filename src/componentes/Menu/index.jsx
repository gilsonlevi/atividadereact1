import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div>
        <nav >
        <ul className={styles.nav}>
          <li className={styles.tituloNav}><a className={styles.linkNav} href="#">Home</a></li>
          <li className={styles.tituloNav}><a href="#">Sobre nós</a></li>
          <li className={styles.tituloNav}><a href="#">Contato</a></li>
          <li className={styles.tituloNav}><a href="#">Cadastro</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default Menu