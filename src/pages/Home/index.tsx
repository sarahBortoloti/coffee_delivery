import coffee from "../../assets/banner/Coffee_banner.svg";
import { Box } from "rebass";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { colors } from "../../styles/colors";
import { Flex, Icon } from "../../components";
import { Card, Text, Title } from "../../components/index";
import { menuItems, SUBTITLE, TITLE } from "./constants";

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
      <Flex justifyContent="center" mt={72}>
        <Flex flexDirection="column" maxWidth={588} mr={28}>
          <Title title={TITLE} subtitle={SUBTITLE} />

          <Flex mx={-2} flexWrap="wrap" width={1}>
            {items.map(({ icon, text, backgroundColor }, index) => {
              return (
                <Flex
                  width={1 / 2}
                  marginBottom={20}
                  alignItems="center"
                  key={index}
                  gapColumn="12px"
                >
                  <Icon key={text} backgroundColor={backgroundColor}>{icon}</Icon>
                  <Text key={`${text} ${index}`}>{text}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Box ml={28}>
          <img src={coffee} />
        </Box>
      </Flex>
      <Flex mt={86} flexDirection="column" alignItems="flex-start" width={1}>
        <Title title="Nossos cafés" fontSizeTitle="32px" />

        <Flex flexWrap="wrap" mt={34} gapColumn="32px">
          {menuItems.map((item, index) => {
            return <Card key={`${item}${index}`} product={item} />;
          })}
        </Flex>
      </Flex>
    </>
  );
};
