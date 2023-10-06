import './App.css';
import Cabecalho from './componentes/Cabecalho';
import CadastroUsuario from './componentes/CadastroUsuario';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <>
      <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito"/>
      <CadastroUsuario/>

      <Rodape logo="imagens/header-logo.png"/>
    </>
  );
}

export default App;
