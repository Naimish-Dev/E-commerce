import React, { useEffect } from 'react'
import { createContext, useContext, useReducer } from 'react'
import reducer from '../reducer/Cart_Reducer';

const cardContext = createContext();

const GetLocatStorageCartItems = () => {
    const remainingCartItems = localStorage.getItem("CartItems")
    if (remainingCartItems === [] || remainingCartItems === null) {
      return [];
    } else {
      return JSON.parse(remainingCartItems);
    }
}
console.log(GetLocatStorageCartItems());
console.log("render");

const initialstate = ({
    cartProducts: GetLocatStorageCartItems() || [] ,
    cartTotal: "",
    cartItems: "",
    shipping_fee: 500,
})

const AddtoCartContext = ({ children }) => {
 

    const [state, dispatch] = useReducer(reducer, initialstate);

    const addtocart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const RemoveCartItems = (id) => {
        dispatch({ type: "Remove_Cart_Item", payload: id })
    }

    const ClearCartItems = () => {
        dispatch({ type: "Clear_Cart_Item", })
    }
    const IncrimentCartItems = (id) => {
        dispatch({ type: "Incriment_Cart_Item", payload : id})
    }
    const DecrimentCartItems = (id) => {
        dispatch({ type: "Decriment_Cart_Item", payload : id})
    }

    useEffect(() => {
                localStorage.setItem(
                  "CartItems",
                  JSON.stringify(state.cartProducts)
                );

        dispatch({type:"Cart_Total_Items"})
        dispatch({ type:"Cat_Total"})
      dispatch({ type:"Cart_Amount_Items"})

    }, [state.cartProducts])

    return <cardContext.Provider value={{ ...state, addtocart, RemoveCartItems, ClearCartItems, IncrimentCartItems, DecrimentCartItems }} >{children}</cardContext.Provider>
}

const useCardContext = () => {
    return useContext(cardContext)
}

export { AddtoCartContext, useCardContext };