import { ContentTotal, Price, StyledButton, StyledCard, StyledFlex, Tag } from "./styles";
import coffee1 from "../../assets/Image-1.svg"
import { Box, Flex } from "rebass";
import { Button, Text, Title } from "../index";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { colors } from "../../styles/colors";

type CoffeeProps = {
  tags?: string[] | string;
  title?: string;
  price?: number;
  description?: string;
  img?: string
}


type CardProps = {
  product?: CoffeeProps;
};

export const Card = ({ product = {} }: CardProps) => {
  const total = 0;
  return (
    <StyledCard flexDirection="column" alignItems="center">
      <Box mt={-20}>
        <img src={coffee1} width="120px" height="120px" />
      </Box>
      <Tag flexWrap="wrap" mt={12} justifyContent="center" alignItems="center"> Tradicional</Tag>
      <Title title="Expresso Tradicional" fontSizeTitle="20px" />
      <Box mx={20} mt={-2} textAlign="center">
        <Text fontSizeText="14px" color="#8D8686">
          O tradicional café feito com água quente e grãos moídos
        </Text>
      </Box>
      <Flex alignItems="center" mt={32}>
        <Price>
          9.90
        </Price>
        <StyledFlex>
          <ContentTotal backgroundColor={colors.base.button} alignItems="center" justifyContent="space-around">
            <StyledButton>
              <Minus size={14} color={colors.brand.purple} weight="bold" />
            </StyledButton>
            <Text>
              {total}
            </Text>

            <StyledButton>
              <Plus size={14} color={colors.brand.purple} weight="bold" />
            </StyledButton>
          </ContentTotal>
          <Button backgroundColor={colors.brand.purpleDark}>
            <ShoppingCart
              size={20}
              weight="fill"
              color={colors.base.white}
            />
          </Button>
        </StyledFlex>
      </Flex>

    </StyledCard>);
};
