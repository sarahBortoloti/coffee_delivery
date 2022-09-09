import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Box } from "rebass";
import { Flex } from "../../components";
import { colors } from "../../styles";
import { StyledCard } from "./styles";
import { Text, Icon } from "../../components";
import successSVG from "../../assets/success.svg";
import { ContextCoffee } from "../../context";
import { useContext } from "react";

export const Success = () => {
  const { finalOrder } = useContext(ContextCoffee);

  return (
    <Flex gapColumn="112px" mt={80}>
      <StyledCard flexDirection="column" gapRow="20px">
        <Flex gapColumn="12px" alignItems="center" pl={40}>
          <Icon backgroundColor={colors.brand.purple}>
            <MapPin size={16} weight="fill" color={colors.base.white} />
          </Icon>
          <Flex flexDirection="column">
            <Text>
              Entrega em <strong>{finalOrder.rua}</strong>
            </Text>
            <Text>{finalOrder.bairro} - {finalOrder.cidade}, {finalOrder.uf}</Text>
          </Flex>
        </Flex>

        <Flex gapColumn="12px" alignItems="center" pl={40}>
          <Icon backgroundColor={colors.brand.yellow}>
            <Timer size={16} weight="fill" color={colors.base.white} />
          </Icon>
          <Flex flexDirection="column">
            <Text>Previsão de entrega</Text>
            <Text fontWeight="bold">20 min - 30 min </Text>
          </Flex>
        </Flex>
        <Flex gapColumn="12px" alignItems="center" pl={40}>
          <Icon backgroundColor={colors.brand.yellowDark}>
            <CurrencyDollar size={16} weight="fill" color={colors.base.white} />
          </Icon>
          <Flex flexDirection="column">
            <Text>Pagamento na entrega</Text>
            <Text fontWeight="bold">{finalOrder.paymentType}</Text>
          </Flex>
        </Flex>
      </StyledCard>

      <Box>
        <img src={successSVG} />
      </Box>
    </Flex>
  );
};
