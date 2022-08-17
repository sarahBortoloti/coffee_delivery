import { Trash } from "phosphor-react"
import { Box } from "rebass"
import { menuSVG } from "../../../../assets/menu"
import { BtnCounter, Text, Button, Flex } from "../../../../components"
import { variantsOfButton } from "../../../../components/Button"
import { colors } from "../../../../styles"
import { ContainerShop } from "../../styles"
import { StyledCardProducts } from "./styles"

export const CardProducts = () => {
  return (
    <StyledCardProducts mt={16}>
      <ContainerShop justifyContent="space-between">
        <img src={menuSVG.americano} width="64px" height="64px" alt="imgcoffe" />
        <Flex flexDirection="column" ml={16}>
          <Box mr={40}>
            <Text>Expresso Tradicional</Text>
          </Box>
          <Flex gapColumn="12px" mt="8px">
            <BtnCounter total={0} />
            <Button variant={variantsOfButton.default}>
              <Trash size={16} weight="bold" color={colors.brand.purple} />
              Remover
            </Button>
          </Flex>
        </Flex>
        <Text fontWeight="bold">R$9.90</Text>

      </ContainerShop>

      <Flex flexDirection="column" gapRow="12px">
        <Flex justifyContent="space-between">
          <Text>
            Total de itens
          </Text>
          <Text>
            R$ 29,70
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text> Entrega</Text>
          <Text>R$ 3,50</Text>
        </Flex>
        <Flex justifyContent="space-between" width={1} mb={24}>
          <Text fontSizeText="20px" fontWeight="bold">Total</Text>
          <Text fontSizeText="20px" fontWeight="bold">R$ 33,20</Text>
        </Flex>


        <Button height="42px" backgroundColor={colors.brand.yellow}>
          <Text color={colors.base.white} fontWeight="bold">
            Confirmar Pedido

          </Text>
        </Button>
      </Flex>
    </StyledCardProducts>
  )
}