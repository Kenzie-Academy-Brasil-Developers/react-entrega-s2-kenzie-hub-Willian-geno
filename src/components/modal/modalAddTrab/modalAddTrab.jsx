import { useState } from "react";
import {Conteiner, ModalConteiner, HaederConteiner, BodyConteiner} from "../modalcadastro/styled"
import api from "../../../services/api";
import Button from "../../button/button";


const ModalAddTrab = ({setIsModaladdTrab}) =>{
    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::token") || null)
    )

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const request = () => {
        const tech = {title, description, "deploy_url":"-"}
        api.post("/users/works", tech, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setIsModaladdTrab(false)
        })
        .catch(err => console.log(err));
    }
    return <Conteiner>
        <ModalConteiner>
            <HaederConteiner>
                <p>Cadastrar Trabalho</p>
                <button onClick = {()=>setIsModaladdTrab(false)} >X</button>
            </HaederConteiner>
            <BodyConteiner>
                <input  placeholder = "Nome" 
                        onChange = {(e) => setTitle(e.target.value)} 
                        required/>
                <input  placeholder = "Discrição" 
                        onChange = {(e) => setDescription(e.target.value)} 
                        required/>
            </BodyConteiner>
            <Button name = "Cadaster" 
                    color = "#FFFFFF"  
                    background = "#403CAA" 
                    onClick = {() => request()}/>
        </ModalConteiner>
    </Conteiner>
}

export  default ModalAddTrab;