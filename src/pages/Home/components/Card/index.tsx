import {
  Price,
  StyledCard,
  Tag,
} from "./styles";
import { Box, Button } from "rebass";
import { ShoppingCart } from "phosphor-react";
import { Title, Flex, Text } from "../../../../components";
import { colors } from "../../../../styles";
import { BtnCounter } from "../../../../components/BtnCounter";
import { CoffeeProps } from "../../../../types/coffee";


type CardProps = {
  product: CoffeeProps;
};

export const Card = ({ product }: CardProps) => {


  const formattedPrice = () => {
    if (product.price > 0 && !product.newPrice) {
      return product.price.toFixed(2);
    } else {
      return product.newPrice?.toFixed(2);
    }
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
          <BtnCounter product={product} />
          <Button backgroundColor={colors.brand.purpleDark}>
            <ShoppingCart size={20} weight="fill" color={colors.base.white} />
          </Button>
        </Flex>
      </Flex>
    </StyledCard>
  );
};
