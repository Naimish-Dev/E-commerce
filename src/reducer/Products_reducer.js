const ProductReducer = (state, action) => {


    switch (action.type) {
        case "Lodding_Data":
            return {
                ...state,
                isLoding: true
            }

        case "Error":
            return {
                ...state,
                isLoding: false,
                isError: true,

            }
        case "All_Data":
            const FavoriteProduct = action.payload.filter((value) => {
                return value.price  >= 4000000 ;
            })
            return {
                ...state,
                products: action.payload,
                HomePageProduct: FavoriteProduct,
                isLoding: false
            }

        case "SingleProduct-Loding":
            return {
                ...state,
                isSinglLoding: true,
            }

        case "SingleProduct":
            return {
                ...state,
                isSinglLoding: false,
                SingleProduct: action.payload
            }
            
        case "SingleProduct-Error":
            return {
                ...state,
                isSinglError: false,
            }

        default: return state;
    }


    // you must return State if nothin to change in state above
    // return state 
}

export default ProductReducer;