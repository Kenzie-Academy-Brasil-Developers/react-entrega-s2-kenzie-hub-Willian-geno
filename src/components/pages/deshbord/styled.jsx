import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    @media screen and (min-width: 900px){

    }
`

export const HeaderConteiner = styled.div`
    display: flex;
    height: 10vh;
    width: 90%;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 0 5%;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    img{
        width: 50px;
    }

    @media screen and (min-width: 900px){

    }
`

export const BodyConteiner = styled.div`
    margin: 30px 10% 0 10%;

    @media screen and (min-width: 900px){
        display: flex;
        justify-content: space-between;
        margin: 30px 2.5% 0 2.5%;

    }

`

export const HeaderBodyConteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 20px;
    }

    button{
        width: 50px;
        height: 40px;
        color: #FFFFFF;
        font-size: 38px;
        background-color: var(--Color-secondary-green);
        border-radius: 10px;
    }

    @media screen and (min-width: 900px){
       
        height: auto;
        h1{
            font-size: 25px;
        }
        button{
            width: 40px;
            height: 30px;
            font-size: 25px;
            border-radius: 5px;
        }

    }
`

export const TecConteiner = styled.div`
    min-height: 120px;
    max-height: 350px;
    overflow: auto;

    @media screen and (min-width: 900px){
        background-color: #FFFFFF;
        width: 35%;
        padding: 4px 10px;
    }

`
export const TrabConteiner = styled.div`
   min-height: 120px;
   max-height: 350px;
   overflow: auto;
    
   @media screen and (min-width: 900px){
        padding: 4px 10px;
        background-color: #FFFFFF;
        width: 35%;
   }

`
export const UserConteiner = styled.div`
    display: none;

    @media screen and (min-width: 900px){
        background-color: #FFFFFF;
        display: flex;
        width: 20%;
        flex-direction: column;
    }
    
    `

export const HeaderUserConteier = styled.div`
    background-color: var(--Color-primary-blue);
    display: flex;
    height: 65px;
    padding: 5px;
    border-radius: 10px 10px  0 0 ;

    img{
        width: 40px;
        height: 50px;
        margin-right: 10px;
    }
    h1{
        color: #FFFFFF;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
    }
    p{
        color: #FFFFFF;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 18px;
    }
`

export const BodyUserConteiner = styled.div`
    display: flex;
    height: 45px;
    background-color: #E8F5EF;
    margin:10px 0;
    align-items: center;
    
    
    
    div{
        background-color: var(--Color-secondary-green);
        color: #FFFFFF;
        width: 40px;
        height: 85%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        margin: 0 10px 0  5px;
    }
    p{
        font-size: 13px;
        text-align: center;
        color: var(--grey-50)

    }

`