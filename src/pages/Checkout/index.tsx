import {
  Bank,
  CreditCard,
  Money,
  MapPinLine,
  CurrencyDollar,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";
import { Box } from "rebass";
import { Flex, Input, Text, Button } from "../../components";
import { variantsOfButton } from "../../components/Button";
import { colors } from "../../styles";
import { Card, ContainerShop, ContentIcon } from "./styles";
import { menuSVG } from "./../../assets/menu/index";
import { useContext } from "react";
import { ContextCoffee } from "../../context";
import { FormContent } from "./components/Form";
import { ContentTotal, StyledButton } from "../../components/BtnCounter/styles";
import { BtnCounter } from "../../components/BtnCounter";
import { CardProducts } from "./components/CardProducts";

export const Checkout = () => {

  // const { orderedCoffees, totalOfOcurrencies } =
  //   useContext(ContextCoffee);

  // console.log(orderedCoffees, totalOfOcurrencies);
  const paymentOptions = [
    {
      name: "Cartão de crédito",
      icon: <CreditCard size={16} weight="bold" color={colors.brand.purple} />,
    },
    {
      name: "Cartão de débito",
      icon: <Bank size={16} weight="bold" color={colors.brand.purple} />,
    },
    {
      name: "Dinheiro",
      icon: <Money size={16} weight="bold" color={colors.brand.purple} />,
    },
  ];

  return (
    <Flex width={1} gapColumn="2rem" mt={40}>
      <Box>
        <Text fontWeight="bold">Complete seu pedido</Text>
        <Card mt={16}>
          <>
            <Text>
              <ContentIcon>
                <MapPinLine
                  size={22}
                  weight="bold"
                  color={colors.brand.yellowDark}
                />
              </ContentIcon>
              Endereço de Entrega
            </Text>
            <Text fontSizeText="14px">
              Informe o endereço onde deseja receber seu pedido
            </Text>
            <form>
              <FormContent />
            </form>
          </>
        </Card>

        <Card my={12} width={1}>
          <>
            <Text>
              <ContentIcon>
                <CurrencyDollar
                  size={22}
                  weight="bold"
                  color={colors.brand.purple}
                />
              </ContentIcon>
              Pagamento
            </Text>
            <Text fontSizeText="14px">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </>
          <Flex gapColumn="12px" mt={32}>
            {paymentOptions.map((payment, index) => {
              return (
                <Button
                  key={`${payment.name} ${index}`}
                  variant={variantsOfButton.default}
                  padding="16px"
                  height="51px"
                >
                  {payment.icon}
                  {payment.name}
                </Button>
              );
            })}
          </Flex>
        </Card>
      </Box>
      <Box>

        <Text fontWeight="bold">Cafés selecionados</Text>
        <CardProducts />
      </Box>
    </Flex>
  );
};
