import Cabecalho from '../../componentes/Cabecalho'
import Rodape from '../../componentes/Rodape'

function Principal() {
    return (
    <div>
      <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito"/>
      <Rodape logo="imagens/header-logo.png"/>
    </div>
    )
}

export default Principal