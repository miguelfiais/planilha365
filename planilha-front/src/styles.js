import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C4C4C4;
    display: flex;
    flex-direction: column;
    > button{
        width: 200px;
        height: 40px;
        border: none;
        align-self: center;
        margin-top: 10%;
        cursor: pointer;
        background-color: #585858;
        color: #FFF;
        &:hover{
            opacity: 0.8;
            color: #000;
        }
        &:active{
            opacity: 0.5;
        }
    }
`