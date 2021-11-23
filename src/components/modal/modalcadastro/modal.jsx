import { Conteiner,ModalConteiner,HaederConteiner, BodyConteiner } from "./styled";
import Button from "../../button/button";
import { useNavigate } from "react-router";


const Modal = ({setIsModal, isLogado}) => {

    const navegate = useNavigate();

   const login = () =>{
        navegate("/")
    }

    return  <Conteiner>
        <ModalConteiner>
            <HaederConteiner>
                <p>Sucesson</p>
                <button onClick = {()=>setIsModal(false)} >X</button>
            </HaederConteiner>
            <BodyConteiner>
                <h1>Yessssss!</h1>
                <p>Tudo certinho, seu cadastro deu bom demais</p>
                <p className = "negrito" >Agora basta fazer seu login e começar sua jornada...</p>
            </BodyConteiner>
            <Button name = "ir para login" 
                    color = "#FFFFFF" 
                    background = "#11995E" 
                    onClick = {() => login()}/>
        </ModalConteiner>
    </Conteiner>
}

export default Modal