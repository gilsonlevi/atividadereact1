import './App.css';
import Cabecalho from './componentes/Cabecalho';
import CadastroUsuario from './componentes/CadastroUsuario';
import Rodape from './componentes/Rodape';
import TelaLogin from './componentes/TelaLogin';

function App() {
  return (
    <>
      <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito"/>
      <CadastroUsuario/>
      <TelaLogin/>
      <Rodape logo="imagens/header-logo.png"/>
    </>
  );
}

export default App;
