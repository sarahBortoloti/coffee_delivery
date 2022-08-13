import { Props } from "./index";
import { Flex } from "rebass";
import styled from "styled-components";

export const StyledFlex = styled(Flex)<Props>`
  column-gap: ${({ gapColumn }) => gapColumn};
  row-gap: ${({ gapRow }) => gapRow};
  gap: ${({ gap }) => gap};
`;
