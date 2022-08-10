import { MapPin, ShoppingCart } from 'phosphor-react';
import { Flex } from 'rebass';
import { colors } from '../../styles/colors';
import logoCoffee from "../../assets/logo.svg";
import { Button } from '../index';
import { Container, LabelLocalization } from './styles';


export const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my={32} width={1}>
      <img alt="logo" src={logoCoffee} />
      <Container>
        <LabelLocalization>
          <MapPin size={16} weight="fill" color={colors.brand.purple} />
          Porto alegre-RS
        </LabelLocalization>
        <Button backgroundColor={colors.brand.yellowLight}>
          <ShoppingCart
            size={20}
            weight="fill"
            color={colors.brand.yellowDark}
          />
        </Button>
      </Container>
    </Flex>
  )
}