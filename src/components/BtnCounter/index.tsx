import { Minus, Plus } from "phosphor-react"
import { colors } from "../../styles"
import { ContentTotal, StyledButton } from "./styles"
import { Text } from '../Text';



type BtnCounterProps = {
  total?: number;
  handleSubtractTotal?: () => void;
  handleAddMore?: () => void;
};


export const BtnCounter = ({ total, handleSubtractTotal, handleAddMore }: BtnCounterProps) => {
  return (
    <ContentTotal
      backgroundColor={colors.base.button}
      alignItems="center"
      justifyContent="space-around"
    >
      <StyledButton>
        <Minus size={14} color={colors.brand.purple} weight="bold" />
      </StyledButton>
      <Text>{total}</Text>

      <StyledButton>
        <Plus size={14} color={colors.brand.purple} weight="bold" />
      </StyledButton>
    </ContentTotal>
  )
}