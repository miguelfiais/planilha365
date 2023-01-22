import { BoxForm } from "./styles"
import { useRef } from "react"
import axios from "axios"

const Form = () => {

    const grupo = useRef()
    const jogo = useRef()
    const odd = useRef()
    const unidade = useRef()

    async function inputForm () {
        await axios.post("http://localhost:3001/entradas", {
            group: grupo.current.value, jogo: jogo.current.value, odd: odd.current.value, unit: unidade.current.value
          })
          jogo.current.value = ""
          odd.current.value = ""
          unidade.current.value = ""
        }
  return (
    <BoxForm>
        <label htmlFor="select">Selecione o grupo:
        <select ref={grupo} id="select">
            <option>Selecione</option>
            <option>Punter Global</option>
            <option>Punter Feminino</option>
            <option>Punter E-sports</option>
        </select>
        </label>
        <label> Digite o nome do jogo:
            <input ref={jogo} type="text" placeholder="Real Madrid" />
        </label>
        <label> Digite o valor da ODD:
            <input ref={odd} type="number" placeholder="1.8" />
        </label>
        <label> Digite a unidade:
            <input ref={unidade} type="number" placeholder="0.5" />
        </label>
        <button onClick={inputForm} >Adicionar</button>
    </BoxForm>
  )
}

export default Form