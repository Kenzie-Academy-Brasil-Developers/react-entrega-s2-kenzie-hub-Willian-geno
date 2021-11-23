import { Conteiner } from "./styled";
import Cadastro from "./components/pages/cadastro/cadastro";
import Login from "./components/pages/login"
import Deshbord from "./components/pages/deshbord/deshbord";
import {Route, Routes} from "react-router-dom"
import { useState } from "react";

function App() {

  const [isLogado, setIsLogado] = useState(false);
  


  console.log(isLogado)

  return <Conteiner>
    <Routes>
      <Route path = "/" element = {<Login setIsLogado = {setIsLogado} />}/>

      <Route path = "/cadastro" element = {<Cadastro  setIsLogado = {setIsLogado} 
                                                      isLogado = {isLogado} />}/>
      <Route path = "/deshbord" element = {<Deshbord  setIsLogado = {setIsLogado} 
                                                      isLogado = {isLogado} />}/>
    </Routes>
  </Conteiner>  
}

export default App;
