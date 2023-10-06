import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div>
        <nav >
        <ul className={styles.nav}>
          <li className={styles.tituloNav}><a className={styles.linkNav} href="e">Home</a></li>
          <li className={styles.tituloNav}><a href="e">Sobre nós</a></li>
          <li className={styles.tituloNav}><a href="e">Contato</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default Menu