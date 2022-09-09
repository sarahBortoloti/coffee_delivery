import { useForm, UseFormReturn } from "react-hook-form";
import { Box } from "rebass"
import { Input, Flex } from "../../../../components"

export type AddressProps = {
  cep: string;
  rua: string;
  numero: number | string;
  complemento?:string;
  bairro: string;
  cidade: string;
  uf:string;
};

type FormProps = {
  form: UseFormReturn<AddressProps>
}


export const FormContent = ({ form }: FormProps) => {
  const { register } = form;

  return (
    <Flex flexWrap="wrap" flexDirection="column" mt={16}>
      <Box my={16}>
        <Input {...register('cep')} width="200px" placeholder="CEP" />
      </Box>

      <Flex mb={16}>
        <Input {...register('rua')} width="560px" placeholder="Rua" />
      </Flex>

      <Flex gapColumn="12px" mb={16}>
        <Input {...register('numero')} width="200px" placeholder="Número" />

        <Input {...register('complemento')} width="348px" placeholder="Complemento" />
      </Flex>

      <Flex gapColumn="12px">
        <Input {...register('bairro')} placeholder="Bairro" width="200px" />
        <Input {...register('cidade')} placeholder="Cidade" width="276px" />
        <Input {...register('uf')} placeholder="UF" width="60px" />
      </Flex>
    </Flex>
  )
}