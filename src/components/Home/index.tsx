import { ContainerInfo } from "./styles";
import coffee from "../../assets/Coffee_banner.svg";
import { Header } from "../Header";
import { Flex, Box } from "rebass";
import { Title } from "../Title";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { colors } from "../../styles/colors";
import { Icon } from "..";
import { Text } from "../Text";
import { Card } from "../Card";

const TITLE = "Encontre o café perfeito para qualquer hora do dia";
const SUBTITLE =
  "Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora";

const items = [
  {
    icon: <ShoppingCart size={16} weight="fill" color={colors.base.white} />,
    text: "Compra simples e segura",
    backgroundColor: colors.brand.yellowLight,
  },
  {
    icon: <Package size={16} weight="fill" color={colors.base.white} />,
    text: "Embalagem mantém o café intacto",
    backgroundColor: colors.base.text,
  },
  {
    icon: <Timer size={16} weight="fill" color={colors.base.white} />,
    text: "Entrega rápida e rastreada",
    backgroundColor: colors.brand.yellow,
  },
  {
    icon: <Coffee size={16} weight="fill" color={colors.base.white} />,
    text: "O café chega fresquinho até você",
    backgroundColor: colors.brand.purple,
  },
];

export const Home = () => {
  return (
    <>
      <Header />
      <Flex justifyContent="center" mt={72}>
        <Flex flexDirection="column" maxWidth={588} mr={28}>
          <Title title={TITLE} subtitle={SUBTITLE} />

          <Flex mx={-2} flexWrap="wrap" width={1}>
            {items.map(({ icon, text, backgroundColor }) => {
              return (
                <ContainerInfo width={1 / 2} marginBottom={20} alignItems="center">
                  <Icon backgroundColor={backgroundColor}>
                    {icon}
                  </Icon>
                  <Text>
                    {text}
                  </Text>
                </ContainerInfo>
              )
            })}
          </Flex>
        </Flex>
        <Box ml={28}>
          <img src={coffee} />
        </Box>
      </Flex>
      <Flex justifyContent="center" >
        {/* <Title title="Nossos cafés" fontSizeTitle="32px" /> */}
        <Card />
      </Flex>
    </>
  );
};
