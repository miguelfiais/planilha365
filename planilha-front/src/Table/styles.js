import styled from "styled-components";

export const BoxTable = styled.table`
    max-width: 1300px;
    width: 98%;
    background-color: #FFF;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0px 0px 5px #585858;
    td{
        text-align: center;
        border: 1px solid #C4C4C4;
        padding: 7px;
        &:nth-child(8){
            background-color: green;
            cursor: pointer;
        }
        &:last-child{
            background-color: red;
            cursor: pointer;
        }
        &:first-child{
            cursor: pointer;
        }
    }

`