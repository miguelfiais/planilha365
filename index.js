const express = require ('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const { v4: uuidv4 } = require('uuid');

const entradas = []
const stake = 300
const port = 3001
let date = new Date()
let dateFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
function checkId (request, response, next) {

    const {id} = request.params
    const index = entradas.findIndex(item => (id === item.id))
    if(index < 0){
        return response.status(404).json("entrada is not fount")
    }
    request.entradaIndex = index
    next()
}

app.post('/entradas', (request, response) => {
    const {group, jogo, odd, unit} = request.body
    if(group !== "Selecione" && jogo !== "" && odd !== "" && unit !== ""){
        const entrada = {id: uuidv4() ,group, jogo, odd, unit, retorno: 0, conclused: false, date: dateFormatada, color: false}
        entradas.push(entrada)
        return response.status(201).json(entrada)
    }
})
app.get('/entradas', (request, response) => {
    response.json(entradas.filter (item => item.conclused !== true))
})
app.get('/entradas/concluidas', (request, response) => {
    response.json(entradas.filter (item => item.conclused === true))
})

app.delete('/entradas/:id', checkId, (request, response) => {
    const index = request.entradaIndex
    entradas.splice(index, 1)
    return response.json()
})
app.patch('/entradas/green/:id', checkId, (request, response) => {
    const index = request.entradaIndex
    const result = (stake * entradas[index].unit)*entradas[index].odd - (stake * entradas[index].unit)
    entradas[index].retorno = result
    entradas[index].conclused = true
    entradas[index].color = true
    return response.json(entradas[index])
})
app.patch('/entradas/red/:id', checkId, (request, response) => {
    const index = request.entradaIndex
    const result = - (stake * entradas[index].unit)
    entradas[index].conclused = true
    entradas[index].retorno = (result)
    entradas[index].color = false
    return response.json(entradas[index])
    
})


app.listen(port, ()=> {
    console.log(`Server started on port ${port}`)
})