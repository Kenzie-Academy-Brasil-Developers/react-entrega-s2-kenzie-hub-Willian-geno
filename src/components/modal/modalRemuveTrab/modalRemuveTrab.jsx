import { Conteiner,ModalConteiner,HaederConteiner, BodyConteiner } from "../modalcadastro/styled";
import { useState } from "react";
import Button from "../../button/button";
import api from "../../../services/api";

const ModalRemuveTech = ({setIsModalRemoveTrab, tech}) => {

    const [description, setDescription] = useState(''); 
    const [title, setTitle] = useState(''); 

    
    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::token")) || ""
        );


    const delet = () =>{
        api.delete(`/users/works/${tech.id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setIsModalRemoveTrab(false)
        })
    };

    const atualizar = () => {
        api.put(`/users/works/${tech.id}`, {description, title}, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setIsModalRemoveTrab(false)
        })
    };

    
    return <Conteiner>  
        <ModalConteiner>
            <HaederConteiner>
                <p>Sucesson</p>
                <button onClick = {()=>setIsModalRemoveTrab(false)} >X</button>
            </HaederConteiner>
            <BodyConteiner>
                <input  value = {tech.title} 
                        onChange = {(e)=> setTitle(e.target.value)}/>
                <input  placeholder = "Discrição" 
                        onChange = {(e) => setDescription(e.target.value)} 
                        required/>
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

export default ModalRemuveTech;