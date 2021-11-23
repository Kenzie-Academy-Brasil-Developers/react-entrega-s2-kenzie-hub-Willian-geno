import styled from "styled-components";

export const Conteiner = styled.div`
`
export const CardConteiner = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0 5px 0;
`
export const IconConteiner = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 60px;
    background-color:${({type})=>{
        if (type === "techs"){
            return "#E8F5EF";
        }else {
            return"#ECECF7";
        } 
    }};
    color: ${({type})=>{
        if (type === "techs"){
            return "var(--Color-secondary-green)";
        }else {
            return"var(--Color-primary-blue)";
        } 
    }};
    border-radius: 7px;
    font-size: 30px;

    :hover{
        
        color:${({type})=>{
        if (type === "techs"){
            return "#E8F5EF";
        }else {
            return"#ECECF7";
        } 
    }};
        background-color: ${({type})=>{
        if (type === "techs"){
            return "var(--Color-secondary-green)";
        }else {
            return"var(--Color-primary-blue)";
        } 
    }};

    
    }
`
export const DiscripitionConteiner = styled.div`
    margin-left: 15px;
    width: 60%;
    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        padding: 5px;

    }

    p{

        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        padding: 5px;
        background-color:${({type})=>{
        if (type === "techs"){
            return "#E8F5EF";
        }else {
            return"#ECECF7";
        } 
    }};
        color: ${({type})=>{
            if (type === "techs"){
                return "var(--Color-secondary-green)";
            }else {
                return"var(--Color-primary-blue)";
            } 
        }};
        border-radius: 10px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`