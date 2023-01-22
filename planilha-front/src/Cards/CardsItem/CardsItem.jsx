import { BoxCardItem } from "./styles"

const CardsItem = ({title, value}) => {
  return (
    <BoxCardItem>
        <h2>{title}</h2>
        <p>R$ {value}</p>
    </BoxCardItem>
  )
}

export default CardsItem