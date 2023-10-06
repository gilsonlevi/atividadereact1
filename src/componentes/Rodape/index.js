import React from 'react'
import styles from './Rodape.module.css'

const Rodape = (props) => {

  function mostraData(){
    const date = new Date();
    return date.toLocaleDateString();
  }
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerIcon}>
          <img className={styles.img} src={props.logo} alt="imagem"/>
          <div className={styles.navFooter}>
            <p className={styles.dataCorrente}>{mostraData()}</p>
          </div>
          <div className={styles.navIcon}>
            <a href="https://www.instagram.com/favoritosuper/" target='_blank' rel='noreferrer'> <img className={styles.imgIcon}  src="imagens/instagram.png" alt="imagem"/></a>
            <a href="https://twitter.com/favoritosuper" target='_blank' rel='noreferrer'> <img className={styles.imgIcon}  src="imagens/twitter.png" alt="imagem"/></a>
            <a href="https://www.facebook.com/favoritosuper/?locale=pt_BR" target='_blank' rel='noreferrer'> <img className={styles.imgIcon}  src="imagens/facebook.png" alt="imagem"/></a>
          </div>
        </div>     
      </div>
    </div>

  )
}

export default Rodape