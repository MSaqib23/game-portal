import { Badge } from "@chakra-ui/react"

interface Prop{
    score:number
}

const CriticScore = ({score}:Prop) => {
    let color=score>90?'green':score>60?'yellow':'';
  return (
    <Badge colorScheme={color} fontSize='14px' borderRadius='4px' paddingX={2}>{score}</Badge>
  )
}

export default CriticScore