import { StyledIcon } from "./styles";

export type IconProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
};


export const Icon = ({ children, ...props }: IconProps) => {
  return (
    <StyledIcon {...props}>
      {children}
    </StyledIcon>

  )
}