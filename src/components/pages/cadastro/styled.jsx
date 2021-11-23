import styled from "styled-components";

export const Conteiner = styled.div`
    margin: 15% 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:900px){
        margin: 5% 0;
    }
`

export const LoginConteiner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    justify-content: space-between;
    margin-top: 25px;

    select{
        width: 100%;
        height: 40px;
        position: relative;
        align-items: center;
        display: flex;
        border-radius: 10px;
       
        background-color:  var(--grey-0);
        color: var(--grey-50);
        font-size:18px;
    }

    @media screen and (min-width: 900px){
        height: 75vh;
    }

`