import { FaTrash } from "react-icons/fa"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { TableResults, Td, Container } from "./styles"

const Results = () => {
    const [entrada, setEntrada] = useState([])
    useEffect(()=>{
        async function getEntrada(){
            const {data} = await axios.get("http://localhost:3001/entradas/concluidas")
            setEntrada(data)
        }
        getEntrada()
    })
    async function deleteEntrada(id) {
        await axios.delete(`http://localhost:3001/entradas/${id}`)
    }
    const navigate = useNavigate()
    function voltar(){
        navigate("/")
    }
  return (
    <Container>
    <TableResults>
        <thead>
          <tr>
            <th></th>
            <th>GRUPO</th>
            <th>JOGO</th>
            <th>ODD</th>
            <th>UNIDADE</th>
            <th>RETORNO</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
        {
            entrada.map(item => (
              <tr key={item.id}>
                <td onClick={()=> deleteEntrada(item.id)} ><FaTrash /></td>
                <td>{item.group}</td>
                <td>{item.jogo}</td>
                <td>{item.odd}</td>
                <td>{item.unit}</td>
                <Td isColor = {item.color}>{item.retorno.toFixed(2)}</Td>
                <td>{item.date}</td>
              </tr>
            ))
          }
        </tbody>
        
    </TableResults>
    <button onClick={voltar}>Voltar</button>
    </Container>
  )
}

export default Results