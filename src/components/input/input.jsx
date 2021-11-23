import { Conteiner } from "./stylrd";


const Input = ({label, type, register, name}) => {
    return <Conteiner>
        
        <label>{label}</label>
        <input type = {type}  {...register(name)}/>

    </Conteiner>
}

export default Input;