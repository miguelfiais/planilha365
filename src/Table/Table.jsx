import { BoxTable } from "./styles"
import axios from "axios"
import { useState, useEffect } from "react"
import { FaTrash, FaCheck, FaMinusCircle } from "react-icons/fa"
const Table = () => {

    const [entrada, setEntrada] = useState([])
    useEffect(()=>{
        async function getEntrada(){
            const {data} = await axios.get("http://localhost:3001/entradas")
            setEntrada(data)
        }
        getEntrada()
    })
    async function deleteEntrada(id) {
        await axios.delete(`http://localhost:3001/entradas/${id}`)
    }
    async function Green(id) {
        await axios.patch(`http://localhost:3001/entradas/green/${id}`)
    }
    async function Red(id) {
        await axios.patch(`http://localhost:3001/entradas/red/${id}`)
    }
  return (
    <BoxTable>
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
                <td>{item.retorno.toFixed(2)}</td>
                <td>{item.date}</td>
                <td onClick={()=> Green(item.id)}><FaCheck /></td>
                <td onClick={()=> Red(item.id)}><FaMinusCircle /></td>
              </tr>
            ))
          }
        </tbody>
    </BoxTable>
  )
}

export default Table