import {
  Bank,
  CreditCard,
  Money,
  MapPinLine,
  CurrencyDollar,
} from "phosphor-react";
import { Box } from "rebass";
import { Flex, Text, Button } from "../../components";
import { variantsOfButton } from "../../components/Button";
import { colors } from "../../styles";
import { Card, ContentIcon } from "./styles";
import { useContext, useState } from "react";
import { ContextCoffee } from "../../context";
import { AddressProps, FormContent } from "./components/Form";
import { CardProducts } from "./components/CardProducts";
import { isEmpty } from "ramda";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const Checkout = () => {
  const form = useForm<AddressProps>({
    mode: "onBlur",
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });
  const { coffees, setFinalOrder } = useContext(ContextCoffee);
  const navigate = useNavigate();

  const { watch } = form;
  const [cep, rua, numero, complemento, bairro, cidade, uf] = watch([
    "cep",
    "rua",
    "numero",
    "complemento",
    "bairro",
    "cidade",
    "uf",
  ]);

  const [paymentType, setPaymentType] = useState("");

  const getOrderedCoffees = () => {
    const orderedCoffees = coffees.filter((coffee) => coffee.newPrice);
    return orderedCoffees ? orderedCoffees : [];
  };

  const selectPaymentType = (paymentName: string) => {
    setPaymentType(paymentName);
  };

  const handleCloseOrder = () => {
    const orderedCoffees = getOrderedCoffees().map(({ title, newPrice }) => ({
      title: title,
      price: newPrice?.toFixed(2),
    }));

    if (
      cep &&
      rua &&
      numero &&
      bairro &&
      cidade &&
      uf &&
      paymentType &&
      orderedCoffees
    ) {
      navigate("/success");
      const finalOrder = {
        cep,
        rua,
        numero,
        bairro,
        cidade,
        uf,
        paymentType,
        orderedCoffees,
      };

      setFinalOrder(finalOrder);
    }
  };

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

            <FormContent form={form} />
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
                  onClick={() => selectPaymentType(payment.name)}
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
        {!isEmpty(getOrderedCoffees()) && (
          <CardProducts
            products={getOrderedCoffees()}
            closeOrder={handleCloseOrder}
          />
        )}
      </Box>
    </Flex>
  );
};
