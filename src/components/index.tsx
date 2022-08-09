import * as Styled from "./styles";
import logoCoffee from "../assets/logo.svg";
import coffee from "../assets/Coffee_banner.svg";

import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "./Button";
import { colors } from "../styles/colors";

export const Home = () => {
  return (
    <div>
      <Styled.Header>
        <img alt="logo" src={logoCoffee} />
        <Styled.Flex>
          <Styled.LabelLocalization>
            <MapPin size={16} weight="fill" color={colors.brand.purple} />
            Porto alegre-RS
          </Styled.LabelLocalization>
          <Button backgroundColor={colors.brand.yellowLight}>
            <ShoppingCart
              size={20}
              weight="fill"
              color={colors.brand.yellowDark}
            />
          </Button>
        </Styled.Flex>
      </Styled.Header>

      <Styled.Banner>
        <Styled.BannerTexts>
          <Styled.Title>
            Encontre o café perfeito para qualquer hora do dia
          </Styled.Title>
          <Styled.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Styled.Subtitle>
          <Styled.FlexItems>
            <>
              <Styled.Icon backgroundColor={colors.brand.yellowLight}>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={colors.brand.yellowDark}
                />
              </Styled.Icon>
              <Styled.Text>Compra simples e segura</Styled.Text>
            </>

            <>
              <Styled.Icon backgroundColor={colors.brand.yellowLight}>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={colors.brand.yellowDark}
                />
              </Styled.Icon>
              <Styled.Text>Embalagem mantém o café intacto</Styled.Text>
            </>

            <Styled.FlexItems />
            <Styled.FlexItems>
              <>
                <Styled.Icon backgroundColor={colors.brand.yellowLight}>
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    color={colors.brand.yellowDark}
                  />
                </Styled.Icon>
                <Styled.Text>Entrega rápida e rastreada</Styled.Text>
              </>

              <>
                <Styled.Icon backgroundColor={colors.brand.yellowLight}>
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    color={colors.brand.yellowDark}
                  />
                </Styled.Icon>
                <Styled.Text>O café chega fresquinho até você</Styled.Text>
              </>
            </Styled.FlexItems>
          </Styled.FlexItems>
        </Styled.BannerTexts>
        <Styled.BannerCoffe>
          <img src={coffee} />
        </Styled.BannerCoffe>
      </Styled.Banner>
      {/* <span> Embalagem mantém o café intacto</span>
        <span> Entrega rápida e rastreada</span>
        <span> O café chega fresquinho até você</span> */}
      <main>
        <h3>Nossos cafés</h3>
        <div>
          <img src="coffee" />
          <span>Tipo</span>
          <span>descrição</span>
          <span>Preço</span>
          <span>Quantidade</span>
          <button>Carrinho</button>
        </div>
      </main>
    </div>
  );
};
