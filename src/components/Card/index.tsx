import {
  ContentTotal,
  Price,
  StyledButton,
  StyledCard,
  Tag,
} from "./styles";
import { Box } from "rebass";
import { Button, Flex, Text, Title } from "../index";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { colors } from "../../styles/colors";
import { useState } from "react";

type CoffeeProps = {
  tags: string[];
  title: string;
  price: number;
  description: string;
  img: string;
};

type CardProps = {
  product: CoffeeProps;
};

export const Card = ({ product }: CardProps) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddMore = () => {
    setTotal((state) => state + 1);
    setPrice((state) => state + product.price)
  };

  const handleSubtractTotal = () => {
    if (total > 0) {
      setTotal((state) => state - 1);
      setPrice((state) => state - product.price);
    }
  };


  const formattedPrice = () => {
    if (price > 0) {
      return `${Math.round((price + Number.EPSILON) * 100) / 100}0`;
    }
    return 0;
  };

  return (
    <StyledCard flexDirection="column" alignItems="center">
      <Box mt={-20}>
        <img src={product.img} width="120px" height="120px" />
      </Box>
      <Flex mt={12} flexWrap="wrap" width={1} justifyContent="center" gapColumn="4px">
        {product.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Flex>

      <Title title={product.title} fontSizeTitle="20px" />
      <Box mx={20} mt={-2} textAlign="center">
        <Text fontSizeText="14px" color="#8D8686">
          {product.description}
        </Text>
      </Box>
      <Flex alignItems="center" mt={32} mr={12}>
        <Price>{formattedPrice()}</Price>
        <Flex gapColumn="8px">
          <ContentTotal
            backgroundColor={colors.base.button}
            alignItems="center"
            justifyContent="space-around"
          >
            <StyledButton onClick={handleSubtractTotal}>
              <Minus size={14} color={colors.brand.purple} weight="bold" />
            </StyledButton>
            <Text>{total}</Text>

            <StyledButton onClick={handleAddMore}>
              <Plus size={14} color={colors.brand.purple} weight="bold" />
            </StyledButton>
          </ContentTotal>
          <Button backgroundColor={colors.brand.purpleDark}>
            <ShoppingCart size={20} weight="fill" color={colors.base.white} />
          </Button>
        </Flex>
      </Flex>
    </StyledCard>
  );
};
