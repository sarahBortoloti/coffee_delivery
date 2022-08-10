import React from "react"
import { Flex } from "rebass";
import { Header } from "../Header"
import { Container } from "./styles"

type PageProps = {
  children: React.ReactNode;
}


export const Page = ({ children }: PageProps) => {

  return (
    <Flex alignItems="center" justifyContent="center" marginBottom={80}>

      <Container>
        <Header />

        {children}
      </Container>
    </Flex>
  )
}