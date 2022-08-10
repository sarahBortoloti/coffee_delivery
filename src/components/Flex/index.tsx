import { FlexProps } from "rebass";
import { StyledFlex } from "./styles";

export type Props = FlexProps & {
  gapColumn?: number | string;
  gapRow?: number | string;
  gap?: number | string;
};

export const Flex = ({ children, ...props }: Props) => {
  return (
    <StyledFlex {...props}>
      {children}
    </StyledFlex>
  )
};
