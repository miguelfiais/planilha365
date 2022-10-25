import Cards from "./Cards/Cards"
import Form from "./Forms/Form"
import Header from "./Header/Header"
import { Container } from "./styles"
import Table from "./Table/Table"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  function navegar(){
    navigate("/results")
  }
  return (
    <Container>
      <Header />
      <Cards />
      <Form />
      <Table />
      <button onClick={navegar}>Concluídas</button>
    </Container>

  )
}

export default App
