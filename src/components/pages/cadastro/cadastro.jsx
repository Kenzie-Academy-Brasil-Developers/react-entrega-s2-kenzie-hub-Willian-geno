import { Conteiner,LoginConteiner } from "./styled";
import Input from "../../input/input";
import Logo from "../../logo/logo";
import Button from  "../../button/button"
import { useState } from "react";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { ref } from "yup";
import api from "../../../services/api"
import Modal from "../../modal/modalcadastro/modal";
import { useNavigate } from "react-router";


const Cadastro = ({isLogado}) => {

    const [course_module, setCourse_module] = useState("");
    const [isModal, setIsModal] = useState(false);

    const navegate = useNavigate();

    if (!isLogado) {
        navegate("/")
    }


    const formSchema = yup.object().shape({
        name : yup.string().required("Campo Obrigatorio"),
        email: yup.string().required("Campo Obrigatorio"),
        bio: yup.string().required("Campo Obrigatorio"),
        contact: yup.string().required("Campo Obrigatorio"),
        password: yup.string().required("Campo Obrigatorio"),
        passwordConfimation: yup.string().oneOf([yup.ref("password"),null],"Senhas Com Comflito")

    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(formSchema)})

    const handle = (date) => {
        date = {...date, course_module}
        
        api.post("/users", date)
        .then(response => {

             setIsModal(true);
        })
        .catch((err) => {
        }) 
    }

    return <Conteiner>
        <Logo/>
            <form onSubmit = {handleSubmit(handle)}>
                <LoginConteiner>
                    <Input label = "Nome" type = "name" register = {register} name = "name" errors = {errors.name?.message}/>
                    <Input label = "Email" type = "email" register = {register} name = "email" errors = {errors.email?.message}/>
                    <Input label = "Bio" type = "string" register = {register} name = "bio" errors = {errors.bio?.message}/>
                    <Input label = "Contato" type = "string" register = {register} name = "contact" errors = {errors.contact?.message}/>

                    <select onChange = {(e)=> setCourse_module(e.target.value)} 
                            required>
                        <option value = "">selecione</option>
                        <option value = "Primeiro">Primeiro</option>
                        <option value = "Segundo" >Segundo</option>
                        <option value = "Terceiro" >Terceiro</option>
                        <option value = "Quarto" >Quarto</option>
                    </select>
                    
                    <Input label = "Senha" type = "password" register = {register} name = "password" errors = {errors.password?.message}/>
                    <Input label = "Comfirmar Senha" type = "password" register = {register} name = "passwordConfimation" errors = {errors.passwordConfimation?.message}/>
                    <Button name = "Cadastrar" color = "#FFFFFF"  background = "#403CAA"/>
                </LoginConteiner>
            </form>

    { isModal && <Modal setIsModal = {setIsModal} 
                        isLogado = {isLogado}/>}

    </Conteiner>

}

export default Cadastro;