// Qual café foi selecionado
// Quantos foram selecionados
// Conseguir selecionar e remover em outra tela

import { createContext, ReactNode, useEffect, useState } from "react";

type CoffeeProps = {
  tags: string[];
  title: string;
  price: number;
  totalItems?: number;
  description: string;
  img: string;
};

type ContextCoffeeProps = {
  orderedCoffees?: CoffeeProps[];
  addNewOrderedCoffee?: (coffee: CoffeeProps) => void;
  removeOrderedCoffee?: (coffee: CoffeeProps) => void;
  totalOfOcurrencies?: {};

};

interface ContextCoffeeProviderProps {
  children: ReactNode;
}

export const ContextCoffee = createContext({} as ContextCoffeeProps);

export const ContextCoffeeProvider = ({
  children,
}: ContextCoffeeProviderProps) => {

  const [orderedCoffees, setOrderedCoffees] = useState<CoffeeProps[]>([]);
  // const [totalOfOcurrencies, setTotalOfOcurrencies] = useState({});

  // const getTotalOccurrences = (temp: any[]) => {
  //   const filteredObject = temp.reduce((acc: any, curr: any) => {
  //     acc[curr.title] ? ++acc[curr.title] : acc[curr.title] = 1, acc
  //     return acc;
  //   }, {});
  //   return filteredObject;
  // }


  const addNewOrderedCoffee = (item: CoffeeProps) => {
    const temp = [...orderedCoffees, item];
    // if (temp) {
    //   const getTotal = getTotalOccurrences(temp);
    //   setTotalOfOcurrencies(temp);
    // }

    setOrderedCoffees((prevState) => {

      return [...prevState, item];
    });
  };


  useEffect(() => {
    if (orderedCoffees) {
      const temp = [...orderedCoffees];
      // const getTotal = getTotalOccurrences(temp);
      // setTotalOfOcurrencies(getTotal);
    }
  }, [orderedCoffees]);


  const removeOrderedCoffee = (item: CoffeeProps) => {
    const temp = [...orderedCoffees];
    const index = temp.indexOf(item);
    if (index > -1) {
      temp.splice(index, 1);
      setOrderedCoffees(temp);
    }
  }


  return (
    <ContextCoffee.Provider
      value={{
        orderedCoffees,
        addNewOrderedCoffee,
        removeOrderedCoffee,
        // totalOfOcurrencies,
      }}
    >
      {children}
    </ContextCoffee.Provider>
  );
};
