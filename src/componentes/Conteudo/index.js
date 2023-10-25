import React from 'react'
import styles from './Conteudo.module.css'
import { useState } from 'react'
//Esse componente exporta uma função
//Uma função representa o conteúdo
export default function Conteudo(props) {
  const [nomeSite, setNomeSite]=useState('Nome do Site')
  const [url, setUrl]=useState('URL')
  const [favoritos, setFavoritos] = useState([])

  function salvarFavorito(){
    setFavoritos([...favoritos, {nomeSite, url}])
    console.log('favoritos>>>:', favoritos)
    localStorage.setItem("Favorito", JSON.stringify({nomeSite, url}))
  }


  return (
    <div className={styles.area}>
        <ul>
        {favoritos[0]!== undefined &&
          favoritos.map((favorito) => (
          <li key={favorito.nomeSite}>{favorito.nomeSite}</li>
        ))}
        </ul>


        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label>Nome do site</label>
          <h1>{nomeSite}</h1>
          <input 
            name='nomeSite' 
            onChange={(evento)=>{
              setNomeSite(evento.target.value); 
              console.log(nomeSite)
            }}
          ></input>
          <br/>
          <label>URL</label><br/>
          <h1>{url}</h1>
          <input 
          type='url' 
          name='url' 
          onChange={(evento)=>{
            setUrl(evento.target.value);
            console.log(url)

          }}></input><br/>
          <input 
          type='checkbox' 
          name='checbox'
          ></input>
          <label htmlFor='checkbox'>Importante</label>
          <br/>


          <input type="button" value="Salvar" 
          onClick={()=> salvarFavorito()}/>
        </form>
      </div>
  )
}

export function OlaMundo(){
    console.log("Olá mundo")
}

