import { Box } from "rebass"
import { Input, Flex } from "../../../../components"

export const FormContent = () => {

  return (
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
  )
}