import { createContext, useState, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage';

interface ShoppingCartProviderProps {
  children: ReactNode;
}



type CartType = {
  id: number
  value: number
}

interface ShoppingCartContextData {
  cart: CartType[];
  addProductToShopCart: (productID: number) => void;
  updateCountProduct: (productID: number, count: number) => void;
  deleteProductAtCart: (productID: number) => void;
  removeProductAtCart: (productID: number) => void;
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

    setCart([...cartList])

  }

  function updateCountProduct(productID: number, count:number) {
    let cartList = cart

    const cartItem = cartList.findIndex(item=>{
      return item.id == productID
    })

    if(cartItem!== -1){
      cartList[cartItem].value = count
    }else{
      cartList.push({id: productID, value:count})
    }
    if(cartList[cartItem].value == 0){
      cartList= cartList.filter(item=>{
        return item.id !== productID
      })
    }

    setCart([...cartList])

  }



  function deleteProductAtCart(productID: number) {
    let cartList = cart

    const cartIndex = cartList.findIndex(item=>{
      return item.id == productID
    })

    if(cartIndex!== -1 && cartList[cartIndex].value > 0){
      const cartNewValue = cartList[cartIndex].value - 1
      cartList[cartIndex].value = cartNewValue
    }
    
    if(cartList[cartIndex].value == 0){
      cartList= cartList.filter(item=>{
        return item.id !== productID
      })
    }

    setCart([...cartList])
  }

  function removeProductAtCart(productId: number){
    const cartList = cart

    const cartListFiltered = cartList.filter(item=>{
      return item.id !== productId
    })

    setCart([...cartListFiltered])
  }

 
  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addProductToShopCart,
        deleteProductAtCart,
        removeProductAtCart,
        updateCountProduct
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}