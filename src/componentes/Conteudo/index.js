import React, { useEffect, useState } from "react";
import styles from "./Conteudo.module.css";
import axios from "axios";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [importante, setImportante] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  function salvarFavorito() {
    favoritos.push({ nomeSite, url, importante });
    setFavoritos([...favoritos]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  // Configuração dos headers que você deseja adicionar
const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000' 
};

// Objeto de configuração com os headers
const config = {
  headers: headers
};

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3030/favoritao", config)
      .then((response) => {
        setFavoritos(response.data);
      })
      .catch((error) => {
        console.log(favoritos);
        console.error("Error fetching data:", error);
      });
  });

  return (
    <div className={styles.container}>
      <div className={styles.criarFav}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label>Nome do Site</label>
          <br />
          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br />

          <label>URL</label>
          <br />
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />

          <input
            type="checkbox"
            name="checkbox"
            onChange={() => setImportante(!importante)}
          ></input>
          <label htmlFor="checkbox">Importante</label>
          <br />

          <input
            type="button"
            value="Salvar"
            onClick={() => salvarFavorito()}
          />
        </form>
      </div>

      <ul className={styles.lista}>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) => (
            <li style={favorito.importante ? { color: "red" } : {}}>
              {" "}
              {favorito.nomeSite} : {favorito.url}:
              {favorito.importante ? "importante" : ""}{" "}
            </li>
          ))}
      </ul>

      <h1>Posts</h1>
      {favoritos.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Conteudo;
