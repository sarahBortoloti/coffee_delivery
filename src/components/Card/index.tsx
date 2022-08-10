import {
  ContainerTag,
  ContentTotal,
  Price,
  StyledButton,
  StyledCard,
  StyledFlex,
  Tag,
} from "./styles";
import coffee1 from "../../assets/Image-1.svg";
import { Box, Flex } from "rebass";
import { Button, Text, Title } from "../index";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { colors } from "../../styles/colors";
import { useEffect, useState } from "react";
import usePrevious from "../../hooks/usePrevious";

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
  };

  const handleSubtractTotal = () => {
    if (total > 0) {
      setTotal((state) => state - 1);
    }
  };

  const prevTotal = usePrevious(total) || 0;

  useEffect(() => {
    if (total > prevTotal) {
      setPrice((state) => state + product.price);
    }

    if (total < prevTotal) {
      setPrice((state) => state - product.price);
    }

  }, [total, price]);

  const formattedPrice = () => {
    if (price > 0) {
      return `${Math.round((price + Number.EPSILON) * 100) / 100}0`;
    }
    return 0;
  }

  return (
    <StyledCard flexDirection="column" alignItems="center">
      <Box mt={-20}>
        <img src={product.img} width="120px" height="120px" />
      </Box>
      <ContainerTag mt={12} flexWrap="wrap" width={1} justifyContent="center">
        {product.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </ContainerTag>

      <Title title={product.title} fontSizeTitle="20px" />
      <Box mx={20} mt={-2} textAlign="center">
        <Text fontSizeText="14px" color="#8D8686">
          {product.description}
        </Text>
      </Box>
      <StyledFlex alignItems="center" mt={32} mr={12}>
        <Price>{formattedPrice()}</Price>
        <StyledFlex>
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
        </StyledFlex>
      </StyledFlex>
    </StyledCard>
  );
};
