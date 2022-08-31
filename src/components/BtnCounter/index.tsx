import { Minus, Plus } from "phosphor-react";
import { colors } from "../../styles";
import { ContentTotal, StyledButton } from "./styles";
import { Text } from "../Text";
import { useContext } from "react";
import { ContextCoffee } from "../../context";

type CoffeeProps = {
  tags: string[];
  title: string;
  price: number;
  description: string;
  img: string;
  total: number;
};

type BtnCounterProps = {
  product: CoffeeProps;
};

export const BtnCounter = ({ product }: BtnCounterProps) => {
  const { handleAddMore, handleRemoveCoffee } = useContext(ContextCoffee);
  const total = (product && product.total) || 0;

  return (
    <ContentTotal
      backgroundColor={colors.base.button}
      alignItems="center"
      justifyContent="space-around"
    >
      <StyledButton onClick={() => handleRemoveCoffee(product)}>
        <Minus size={14} color={colors.brand.purple} weight="bold" />
      </StyledButton>
      <Text>{total}</Text>

      <StyledButton onClick={() => handleAddMore(product)}>
        <Plus size={14} color={colors.brand.purple} weight="bold" />
      </StyledButton>
    </ContentTotal>
  );
};
