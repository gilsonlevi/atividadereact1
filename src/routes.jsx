import { BrowserRouter, Routes, Route} from "react-router-dom"
import Principal from './paginas/Principal'
import Rodape from "./componentes/Rodape"
import Cabecalho from "./componentes/Cabecalho"
import TelaLogin from "./paginas/TelaLogin"
import CadastroUsuario from "./paginas/CadastroUsuario"
import SobreNos from "./paginas/SobreNos"

function Rotas() {
    return (
        <BrowserRouter>

        <Cabecalho 
        logo="imagens/header-logo.png" 
        titulo="Supermercado Favorito"/> 
        <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="/login" element={<TelaLogin/>}/>
        <Route path="/cadastro" element={<CadastroUsuario/>}/>
        </Routes>
        <Rodape logo="imagens/header-logo.png"/>

        </BrowserRouter>
    )
}

export default Rotas