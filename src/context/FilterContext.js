import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Filter_reducer";
import { UseProductContext } from "./ProductContext";

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    gride_view: true,
    SortedType:"",
    filter:{
        text:"",
        category:"all",
        company: "all",
        color:"all",
        maxPrice:0,
        price:0,
        minPrice:0,
    }
}


export const FilterContextProvider = ({ children }) => {
    const { products } = UseProductContext();


    const [state, dispatch] = useReducer(reducer, initialState)


    const setGrideView = () => {
       return dispatch({ type: "Gride_View" })
    }

    const setListView = () => {
       return dispatch({ type: "List_View" })
    }
    
    useEffect(() => {
        dispatch({ type: "Load_Filter_Products", payload: products });
    }, [products])
   
    const sortProductHendler=(e)=>{
        return dispatch({type:"Select_Sort_Product_Option" ,payload:e.target.value})
    }

useEffect(()=>{

// console.log("which option select")
dispatch({type:"serch_product_find"})
dispatch({type:"ProductSort_Chang"})

}, [state.SortedType ,products,state.filter])


    const searchProductValue=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        return dispatch({type:"serchtext",payload:{name,value}})
    }

    const cleareFilterhendler =()=>{
        return dispatch({type:"Clreare_filter" ,payload:{products}})
    }

    return <FilterContext.Provider value={{ ...state, setListView, setGrideView, sortProductHendler, searchProductValue, cleareFilterhendler }} >
        
            {children}
            </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}