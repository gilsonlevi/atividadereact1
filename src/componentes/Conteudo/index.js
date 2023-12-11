import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [importante, setImportante ] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  function salvarFavorito() {
    favoritos.push( { nomeSite, url,importante })
    setFavoritos([...favoritos]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  return (
    <div className={styles.container}>



        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          
          <label>Nome do Site</label>
          <br/>
          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br />

          <label>URL</label>
          <br/>
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />

          <input type="checkbox" name="checkbox"onChange={()=>setImportante(!importante)}
          ></input>
          <label htmlFor="checkbox">Importante</label>
          <br />

          <input
            type="button"
            value="Salvar"
            onClick={() => salvarFavorito()}
          />
        </form>

      <ul className={styles.lista}>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) => (
            <li style={favorito.importante?{color:'red'}:{}}> {favorito.nomeSite} : {favorito.url}:{favorito.importante?'importante':''} </li>
          ))}
      </ul>
    </div>
  );
};

export default Conteudo;
