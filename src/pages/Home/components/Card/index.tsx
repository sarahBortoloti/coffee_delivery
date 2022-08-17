import {
  Price,
  StyledCard,
  Tag,
} from "./styles";
import { Box, Button } from "rebass";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState, useContext } from "react";
import { Title, Flex, Text } from "../../../../components";
import { ContextCoffee } from "../../../../context";
import { colors } from "../../../../styles";
import { BtnCounter } from "../../../../components/BtnCounter";


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

  const { addNewOrderedCoffee, removeOrderedCoffee } =
    useContext(ContextCoffee);

  const handleAddMore = () => {
    setTotal((state) => state + 1);
    setPrice((state) => state + product.price)
    if (addNewOrderedCoffee) {
      addNewOrderedCoffee(product);
    }
  };

  const handleSubtractTotal = () => {
    if (total > 0) {
      setTotal((state) => state - 1);
      setPrice((state) => state - product.price);

      if (removeOrderedCoffee) {
        removeOrderedCoffee(product);
      }
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
      <Flex gapColumn="1rem" alignItems="center" mt={32} mr={12}>
        <Price>{formattedPrice()}</Price>
        <Flex gapColumn="0.5rem">
          <BtnCounter total={total} handleSubtractTotal={handleSubtractTotal} handleAddMore={handleAddMore} />
          <Button backgroundColor={colors.brand.purpleDark}>
            <ShoppingCart size={20} weight="fill" color={colors.base.white} />
          </Button>
        </Flex>
      </Flex>
    </StyledCard>
  );
};
