
const Cart_Reducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    const ExistingCartItems = state.cartProducts.find((val) => val.id === id + color)
    if (ExistingCartItems) {
      let update_cart = state.cartProducts.map((val) => {
        if (val.id === id + color) {
          let NewAmount = val.amount + amount;
          if (NewAmount >= val.max) {
            NewAmount = val.max;
          }
          return { ...val, amount: NewAmount };
        } else {
          return val
        }
      }
      )
      return {
        ...state,
        cartProducts: update_cart
      }
    } else {
      let Products = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts, Products]
      }
    }


  }

  if (action.type === "Remove_Cart_Item") {

    let RemainCartItems = state.cartProducts.filter((val) => val.id !== action.payload);
    
    return {
      ...state,
      cartProducts: RemainCartItems
    }
  }

  if (action.type === "Clear_Cart_Item") {
    return {
      ...state,
      cartProducts: [],
    }
  }

  if (action.type === "Incriment_Cart_Item") {
    let id = action.payload

    const UpadateedItemAmount = state.cartProducts.map((val) => {
      if (val.id === id) {
        let IncriseAmount = val.amount + 1
        if (IncriseAmount >= val.max) {
          IncriseAmount = val.max
        }
        return {
          ...val, amount: IncriseAmount
        }
      } else {
        return val
      }
    })

    return { ...state, cartProducts: UpadateedItemAmount }
  }

  if (action.type === "Decriment_Cart_Item") {
    const id = action.payload

    const UpadateedItemAmount = state.cartProducts.map((val) => {
      if (val.id === id) {
        let DecriseAmount = val.amount - 1;
        if (DecriseAmount <= 1) {
          DecriseAmount = 1

        }
        return {
          ...val,
          amount: DecriseAmount
        }
      } else {
        return val
      }
    })
    return {
      ...state,
      cartProducts: UpadateedItemAmount
    }
  }
  // if (action.type === "Cart_Total_Items") {
  //   let UpadateedItemAmount = state.cartProducts.reduce((initialVal, currntval) => {
  //     initialVal = initialVal + currntval.amount
  //     return initialVal;

  //   }, 0)
  //   return {
  //     ...state,
  //     cartItems: UpadateedItemAmount
  //   }
  // }

  // if (action.type === "Cat_Total") {
  //   let TotalAmount
  //   const UpdatedCartTotal = state.cartProducts.reduce((initialVal, Val) => {
  //     TotalAmount = initialVal + Val.amount * Val.price
  //     return TotalAmount
  //   }, 0)
  //   return {
  //     ...state,
  //     cartTotal: UpdatedCartTotal
  //   }
  // }
  
if(action.type==="Cart_Amount_Items"){
  let{Updated_Total,Updated_Total_Items}=state.cartProducts.reduce((accu,val)=>{ 
    accu.Updated_Total_Items += val.amount;
    accu.Updated_Total += val.amount*val.price;

    return accu
  }, { Updated_Total:0, Updated_Total_Items:0 })
  return{
    ...state,
    cartTotal: Updated_Total, cartItems: Updated_Total_Items

  }
}
  return state
}

export default Cart_Reducer