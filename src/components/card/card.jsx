import {    Conteiner,
            CardConteiner,
            IconConteiner,
            DiscripitionConteiner } from "./styled";
import {FiGitPullRequest, FiCodesandbox} from "react-icons/fi"

const Card = ({name, status, type, opemRemuveTech, id, opemRemuveTrab}) => {

    return <Conteiner>    
           <CardConteiner >
               <IconConteiner type = {type}>
                     {type === "techs"? 
                     (<FiCodesandbox onClick = {() => opemRemuveTech(id)} />)
                    :
                    (<FiGitPullRequest onClick = {() => opemRemuveTrab(id)}/>)}                   
                </IconConteiner>
                <DiscripitionConteiner type = {type} >
                    <h1>{name}</h1>
                    <p>{status}</p>
                </DiscripitionConteiner>
            </CardConteiner>
     

    </Conteiner>
}

export default Card;