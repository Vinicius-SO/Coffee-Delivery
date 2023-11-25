import { createContext, useState, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

interface CartType {
  id: number
  value: number
}

interface ShoppingCartContextData {
  cart: CartType[];
  addProductToShopCart: (productID: number) => void;
  // updateCountProduct: (productID: number, count: number) => void;
  deleteProductAtCart: (productID: number) => void;
  // clearCart: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const { loadLocalStorage, saveToLocalStorage } = useLocalStorage();
  const [cart, setCart] = useState(() => {
    const cartJSON = loadLocalStorage('@coffee-delivery:shop-cart');

    if (!cartJSON) return [] as CartType[];

    return cartJSON as CartType[];
  });

  function addProductToShopCart(productID: number) {
    const cartList = cart

    const cartItem = cartList.findIndex(item=>{
      return item.id == productID
    })

    if(cartItem!== -1){
      const cartNewValue = cartList[cartItem].value + 1
      cartList[cartItem].value = cartNewValue
    }else{
      cartList.push({id: productID, value:1})
    }

    setCart(cartList)

    // console.log(cart)
  }



  function deleteProductAtCart(productID: number) {
   
  }

 
  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addProductToShopCart,
        deleteProductAtCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}