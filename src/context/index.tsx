import { createContext, ReactNode, useState } from "react";
import { AddressProps } from "../pages/Checkout/components/Form";
import { menuItems } from "../pages/Home/constants";
import { CoffeeProps } from "../types/coffee";

type ContextCoffeeProps = {
  coffees: CoffeeProps[];
  totalOfOcurrencies?: {};
  handleAddMore: (coffee: CoffeeProps) => void;
  handleRemoveCoffee: (coffee: CoffeeProps) => void;
  setFinalOrder: (order: any) => void;
  finalOrder: any;
};

interface ContextCoffeeProviderProps {
  children: ReactNode;
}

export const ContextCoffee = createContext({} as ContextCoffeeProps);

export const ContextCoffeeProvider = ({
  children,
}: ContextCoffeeProviderProps) => {

  const [coffees, setCoffees] = useState<CoffeeProps[]>(menuItems);
  const [finalOrder, setFinalOrder] = useState<any>();

  const [total, setTotal] = useState(0);

  const getIndexOfCoffee = (coffees: CoffeeProps[], title: string) => coffees.findIndex(coffee => coffee.title === title);

  const updateTotal = (product: CoffeeProps, total: number) => {
    setCoffees(prevState => {
      let data = [...prevState];
      let indexOfCoffee = getIndexOfCoffee(data, product.title);

      const newPrice = product.price * total;

      data[indexOfCoffee] = {
        ...data[indexOfCoffee],
        total: total,
        newPrice: parseFloat(newPrice.toFixed(2)),
      }

      return data;
    });

    setTotal(0);
  }

  //to-do: add use reducer
  const handleAddMore = (product: CoffeeProps) => {
    setTotal(product.total);
    setTotal((state) => {
      const newTotal = state + 1;

      updateTotal(product, newTotal);
      return newTotal;
    });

  }


  const handleRemoveCoffee = (product: CoffeeProps) => {
    setTotal(product.total);
    setTotal((state) => {
      if (state > 0) {
        const newTotal = state - 1;

        updateTotal(product, newTotal);
        return newTotal;
      }

      return 0;
    });
  }

  return (
    <ContextCoffee.Provider
      value={{
        coffees,
        handleAddMore,
        handleRemoveCoffee,
        setFinalOrder,
        finalOrder,
      }}
    >
      {children}
    </ContextCoffee.Provider>
  );
};
