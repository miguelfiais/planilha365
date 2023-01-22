import CardsItem from "./CardsItem/CardsItem"
import { ContainerCard } from "./styles"
import { useState, useEffect } from "react"
import axios from "axios"

const Cards = () => {

  let soma = 0
  const [entrada, setEntrada] = useState([])

  useEffect(()=>{
    async function getEntrada(){
        const {data} = await axios.get("http://localhost:3001/entradas/concluidas")
        setEntrada(data)
    }
    getEntrada()
  })
    {
      entrada.map(item => {
        soma = soma + item.retorno
      })
    }
  return (
    <ContainerCard>
        <CardsItem title = "Unidade:" value = "300,00" />
        <CardsItem title = "Retorno total:" value = {soma.toFixed(2)}/>
    </ContainerCard>
  )
}

export default Cards