import { colors } from "./../../styles/colors";
import { IconProps } from "./index";
import styled from "styled-components";

export const StyledIcon = styled.div<IconProps>`
  border-radius: 1000px;
  width: ${({ width }) => width || "32px"};
  height: ${({ height }) => height || "32px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.base.button};
  display: flex;
  align-items: center;
  justify-content: center;
`;
