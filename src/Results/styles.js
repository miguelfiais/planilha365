import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #383838;
    padding-top: 20px;
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
            background-color: #E4E4E4;
            color: #000;
        }
        &:active{
            opacity: 0.5;
        }
    }
`

export const TableResults = styled.table`
    max-width: 1300px;
    width: 98%;
    background-color: #585858;
    margin: 0 auto;
    padding: 20px;
    color: #FFF;
    td{
        text-align: center;
        border: 1px solid #C4C4C4;
        padding: 7px;
    }
`
export const Td = styled.td`
    background: ${props => props.isColor ? "#2ec193" : "#FF5B38"}
`