import styled from "styled-components";
import { Flex } from "../../components";

export const StyledCard = styled(Flex)`
  box-sizing: border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 17.5rem;
  width: 31.75rem;
  justify-content: center;
`;
