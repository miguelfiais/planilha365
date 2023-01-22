import styled from "styled-components"

export const BoxForm = styled.div`
    background-color: #FFF;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    width: 98%;
    margin: 20px auto;
    box-shadow: 0px 0px 5px #585858;
    @media (max-width: 800px) {
        display: grid;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    label{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    select, input{
        height: 25px;
        border: 1px solid #C4C4C4;
        border-radius: 4px;
        padding-left: 5px;
    }
    button{
        padding: 10px;
        border: none;
        border-radius: 8px;
        background-color: #137a5a;
        color: #ffdf1b;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
`