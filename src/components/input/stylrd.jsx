import styled from "styled-components";

export const Conteiner = styled.div`
    width: 90%;
    height: 40px;
    position: relative;
    align-items: center;
    display: flex;
    border-radius: 10px;
    padding: 0 15px  0 15px ;
    background-color:  var(--grey-0);


    label{
        
        font-size:18px;
        color: var(--grey-50);
        transition:all 0.4s linear;
        min-inline-size: max-content;
    }
    input{

        transition:all 1s ;
        width: 100%;
        height: 40%;
        margin-left: 10px;
        outline: none;
        background-color: inherit;
    }

    :focus-within {
        background-color:  #FFFFFF;
        border:  1px solid black;

        input{
            transform: translateX(-50px);
        }
        
        label{
            transform: translateY(-20px);
            background-color: white;
            font-size: 13px;
            padding: 0 7px ;
         
        }
    } 

    @media screen and (min-width:900px){
        width: 380px;
    }
`