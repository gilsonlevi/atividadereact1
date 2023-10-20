import { BrowserRouter, Routes, Route} from "react-router-dom"
import Principal from './paginas/Principal'
import Login from './paginas/TelaLogin'
import Cadastro from './paginas/CadastroUsuario'

function routes() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default routes