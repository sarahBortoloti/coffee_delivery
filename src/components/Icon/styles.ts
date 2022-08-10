import { colors } from "./../../styles/colors";
import { IconProps } from "./index";
import styled from "styled-components";
import { Flex } from "rebass";

export const StyledIcon = styled(Flex)<IconProps>`
  border-radius: 1000px;
  width: ${({ width }) => width || "2rem"};
  height: ${({ height }) => height || "2rem"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.base.button};
  display: flex;
  align-items: center;
  justify-content: center;
`;
