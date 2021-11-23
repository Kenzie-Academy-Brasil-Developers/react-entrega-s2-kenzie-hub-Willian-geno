import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15% 0 ;
    justify-content: center;
    height: 70%;


    @media screen and (min-width: 900px){
        margin: 5% 0 ;
    }
`
export const ConsteinerInput = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
    
    form{
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
    }
`

export const Discription = styled.div`
    color: var(--grey-50);
    text-align: center;
    p{
        font-size: 12px;

    }
    .negrito{
        color: var(--grey-100);
    }

`
