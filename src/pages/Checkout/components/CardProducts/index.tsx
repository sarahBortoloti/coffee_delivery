import { Trash } from "phosphor-react";
import { Box } from "rebass";
import { BtnCounter, Text, Button, Flex } from "../../../../components";
import { variantsOfButton } from "../../../../components/Button";
import { colors } from "../../../../styles";
import { CoffeeProps } from "../../../../types/coffee";
import { ContainerShop } from "../../styles";
import { StyledCardProducts } from "./styles";

type CardProps = {
  products: CoffeeProps[];
  closeOrder: () => void;
};

export const CardProducts = ({ products, closeOrder }: CardProps) => {

  const priceTotal = products.reduce((sum, { newPrice }) => sum + (newPrice || 0), 0).toFixed(2);
  const priceTotalWithDelivery = (parseFloat(priceTotal) + 3.50).toFixed(2);
  return (
    <StyledCardProducts mt={16}>
      {products.map((product, index) => {
        return (
          <ContainerShop mt={16} key={index} justifyContent="space-between">
            <img src={product.img} width="64px" height="64px" alt="imgcoffe" />
            <Flex flexDirection="column" ml={16}>
              <Box mr={40}>
                <Text>{product.title}</Text>
              </Box>

              <Flex gapColumn="12px" mt="8px">
                <BtnCounter product={product} />
                <Button variant={variantsOfButton.default}>
                  <Trash size={16} weight="bold" color={colors.brand.purple} />
                  Remover
                </Button>
              </Flex>
            </Flex>
            <Text fontWeight="bold">R${product.newPrice?.toFixed(2)}</Text>
          </ContainerShop>
        );
      })}

      <Flex flexDirection="column" gapRow="12px">
        <Flex justifyContent="space-between">
          <Text>Total de itens</Text>
          <Text>R${priceTotal}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text> Entrega</Text>
          <Text>R$ 3,50</Text>
        </Flex>
        <Flex justifyContent="space-between" width={1} mb={24}>
          <Text fontSizeText="20px" fontWeight="bold">
            Total
          </Text>
          <Text fontSizeText="20px" fontWeight="bold">
            R${priceTotalWithDelivery}
          </Text>
        </Flex>

        <Button height="42px" backgroundColor={colors.brand.yellow} onClick={() => closeOrder()}>
          <Text color={colors.base.white} fontWeight="bold">
            Confirmar Pedido
          </Text>
        </Button>
      </Flex>
    </StyledCardProducts>
  );
};
