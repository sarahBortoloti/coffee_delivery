import { MapPin, ShoppingCart } from "phosphor-react";
import { colors } from "../../styles/colors";
import logoCoffee from "../../assets/logo.svg";
import { Button, Flex } from "../index";
import { LabelLocalization } from "./styles";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ContextCoffee } from "../../context";
import { isEmpty } from "ramda";

export const Header = () => {
  const navigate = useNavigate();

  const redirectToCheckout = () => navigate("/checkout");
  const { finalOrder } = useContext(ContextCoffee);

  return (
    <Flex justifyContent="space-between" alignItems="center" my={32} width={1}>
      <img alt="logo" src={logoCoffee} />
      <Flex gap="0.75rem">
        {!isEmpty(finalOrder) && ( 
          <LabelLocalization>
            <MapPin size={16} weight="fill" color={colors.brand.purple} />
            {finalOrder?.cidade} - {finalOrder?.uf}
          </LabelLocalization>
        )}
        <Button
          backgroundColor={colors.brand.yellowLight}
          onClick={redirectToCheckout}
          height="35px"
        >
          <ShoppingCart
            size={20}
            weight="fill"
            color={colors.brand.yellowDark}
          />
        </Button>
      </Flex>
    </Flex>
  );
};
