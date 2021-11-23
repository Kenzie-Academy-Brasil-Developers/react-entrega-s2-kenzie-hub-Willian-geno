import { useState } from "react";
import {Conteiner, ModalConteiner, HaederConteiner, BodyConteiner} from "../modalcadastro/styled"
import Button from "../../button/button";
import api from "../../../services/api";
import { useNavigate } from "react-router";

const ModalAddTechs = ({setIsModaladdTechs}) => {
    
    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::token") || null)
    )

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    const navegate = useNavigate();

    const request = () => {
        const tech = {title, status}
        api.post("/users/techs", tech, {
            headers:{
                Authorization: `Bearer ${token}`
            }
            
        })
        .then(res => {
            setIsModaladdTechs(false)
        })
        .catch(err => console.log(err));
    }

    return <Conteiner>
        <ModalConteiner>
            <HaederConteiner>
                <p>Cadastrar Tecnologia</p>
                <button onClick = {()=>setIsModaladdTechs(false)} >X</button>
            </HaederConteiner>
            <BodyConteiner>
                <input onChange = {(e) => setTitle(e.target.value)} 
                        required/>
                <select onChange = {(e)=> setStatus(e.target.value)} 
                        required>
                    <option value = "">selecione</option>
                    <option value = "Iniciante">Iniciante</option>
                    <option value = "Intermidiario" >Intermidiario</option>
                    <option value = "Avançado" >Avançado</option>
                </select>
            </BodyConteiner>
            <Button color = "#FFFFFF"  
                    background = "#403CAA" 
                    onClick = {() => request()} 
                    name = "Cadastrar"/>
        </ModalConteiner> 
    </Conteiner>
}

export default ModalAddTechs;