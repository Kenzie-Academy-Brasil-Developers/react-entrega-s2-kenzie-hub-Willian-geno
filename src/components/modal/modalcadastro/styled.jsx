import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(1,1,1,0.5);
    top: 0;
    display: flex;
    justify-content: center;

`
export const ModalConteiner = styled.div`
    width: 85%;
    height: 50vh;
    margin-top: 13%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 5% 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 900px){
        width: 30%;
        height: 40vh;
        margin-top: 5%;
        padding: 15px 10px ;
    }
    
`
export const HaederConteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    button{
        background-color: transparent;
    }

    `
export const BodyConteiner = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 35%;
    h1{
        font-size: 30px;
    }
    p{
        text-align: center;
        color: var(--grey-50);
        font-size: 15px;
    }
    input{
        width: 90%;
        height: 40px;
        border-radius: 10px;
        padding: 0 15px  0 15px ;
        background-color:  var(--grey-0);
        border: solid 1px var(--grey-50);
        outline: 0;
        margin: 10px 0 10px 0;
    }
    select{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        padding: 0 15px  0 15px ;
        background-color:  var(--grey-0);
        border: solid 1px var(--grey-50);
        outline: 0;

    }
    .negrito{
        color: var(--grey-100);
    }

`

