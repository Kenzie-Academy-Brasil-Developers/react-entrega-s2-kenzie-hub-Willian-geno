import { Conteiner } from "./styled";

const Button = ({name, color, background, onClick}) => {
    return <Conteiner color = {color} background = {background}>
        <button onClick = {onClick} type = "submit">{name}</button>
    </Conteiner>
}

export default Button;