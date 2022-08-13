import {
  Bank,
  CreditCard,
  Money,
  MapPinLine,
  CurrencyDollar,
  Minus,
  Plus,
} from "phosphor-react";
import { Box } from "rebass";
import { Flex, Input, Text, Button } from "../../components";
import { variantsOfButton } from "../../components/Button";
import { colors } from "../../styles";
import { Card, CardProducts, ContainerShop, ContentIcon } from "./styles";
import { menuSVG } from "./../../assets/menu/index";
import { ContentTotal, StyledButton } from "../../components/Card/styles";

export const Checkout = () => {
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
    <Flex width={1} gapColumn="2rem">
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
              <Flex flexWrap="wrap" flexDirection="column" mt={16}>
                <Box my={16}>
                  <Input width="200px" placeholder="CEP" />
                </Box>

                <Flex mb={16}>
                  <Input width="560px" placeholder="Rua" />
                </Flex>

                <Flex gapColumn="12px" mb={16}>
                  <Input width="200px" placeholder="Número" />

                  <Input width="348px" placeholder="Complemento" />
                </Flex>

                <Flex gapColumn="12px">
                  <Input placeholder="Bairro" width="200px" />
                  <Input placeholder="Cidade" width="276px" />
                  <Input placeholder="UF" width="60px" />
                </Flex>
              </Flex>
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
                  width="178px"
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
        <CardProducts mt={16}>
          <ContainerShop justifyContent="space-between">
            <img src={menuSVG.americano} width="64px" height="64px" alt="imgcoffe" />
            <Flex flexDirection="column" ml={16}>
              <Box mr={40}>
                <Text>Expresso Tradicional</Text>

              </Box>
              <Flex gapColumn="12px">
                <ContentTotal
                  backgroundColor={colors.base.button}
                  alignItems="center"
                  justifyContent="space-around"
                  width={1 / 2}
                >
                  <StyledButton>
                    <Minus size={14} color={colors.brand.purple} weight="bold" />
                  </StyledButton>
                  <Text>1</Text>

                  <StyledButton>
                    <Plus size={14} color={colors.brand.purple} weight="bold" />
                  </StyledButton>

                </ContentTotal>
                <Button variant={variantsOfButton.default}>Remover</Button>
              </Flex>
            </Flex>
            <Text fontWeight="bold">R$9.90</Text>

          </ContainerShop>
        </CardProducts>
      </Box>
    </Flex>
  );
};
