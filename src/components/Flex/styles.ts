import { Props } from "./index";
import { Flex } from "rebass";
import styled from "styled-components";

export const StyledFlex = styled(Flex)<Props>`
  column-gap: ${({ gapColumn }) => gapColumn || "auto"};
  row-gap: ${({ gapRow }) => gapRow || "auto"};
  gap: ${({ gap }) => gap || "auto"};
`;
