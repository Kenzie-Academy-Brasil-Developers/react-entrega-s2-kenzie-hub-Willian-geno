
import { Conteiner,ModalConteiner,HaederConteiner, BodyConteiner } from "../modalcadastro/styled";
import { useEffect, useState } from "react";
import Button from "../../button/button";
import api from "../../../services/api";

const ModalRemuveTrab = ({setIsModalRemoveTechs,tech}) => {

    const [status, setStatus] = useState("")

    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::token")) || ""
    );

    console.log(tech)

    const delet = () =>{
        api.delete(`/users/techs/${tech.id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setIsModalRemoveTechs(false);
        })
    };

    const atualizar = () => {
        api.put(`/users/techs/${tech.id}`, {status}, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setIsModalRemoveTechs(false);
        })
    };


    return<Conteiner>
        <ModalConteiner>
            <HaederConteiner>
                <p>Sucesson</p>
                <button onClick = {()=> setIsModalRemoveTechs(false)} >
                    X
                </button>
            </HaederConteiner>
            <BodyConteiner>
                <input  value = {tech.title} 
                        desabled/>
                 <select onChange = {(e)=> setStatus(e.target.value)} 
                        required>
                    <option value = "">selecione</option>
                    <option value = "Iniciante">Iniciante</option>
                    <option value = "Intermidiario" >Intermidiario</option>
                    <option value = "Avançado" >Avançado</option>
                </select>
            </BodyConteiner>
            <Button onClick = {() => atualizar()} 
                    name = "atualiza"
                    color = "#FFFFFF"
                    background = "#11995E"/>
            <Button onClick = {() => delet()} 
                    name = "excluir" 
                    color = "#999999"
                    background = "#F5F5F5"/>
        </ModalConteiner>
    </Conteiner>
}

export default ModalRemuveTrab;