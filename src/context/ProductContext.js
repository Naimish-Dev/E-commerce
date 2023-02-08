import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "../reducer/Products_reducer"


// create context to initilise 
const Newcontext = createContext();

// create context provider MAIN FUNCTION 
const ProductProvider = ({ children }) => {


    // Reducer ByDefault value 
    const initialvalue = {
        products: [],
        HomePageProduct: [],
        isLoding: false,
        isError: false,
        SingleProduct: {},
        isSinglLoding: false,
        isSinglError: false,

    }
    // Use Reducer to perfome the different action 
    const [state, dispatch] = useReducer(reducer, initialvalue);

    // API URL 
    // const Url = "https://fakestoreapi.com/products"
    // const Url = "https://dummyjson.com/products"
    const Url = "https://api.pujakaitem.com/api/products";


     
    // fetch data using axios 
    const getproducts = async () => {
        dispatch({ type: "Lodding_Data" })
        try {
            const res = await axios.get(Url);
            const fineldata = await res.data
            // console.log(fineldata)
            dispatch({ type: "All_Data", payload:fineldata })
        } catch (E) {
            console.log(E);
            dispatch({ type: "Error" })
        }
    }

    const SingleProductData = async (singleproducturl) => {
        dispatch({ type: "SingleProduct-Loding" })
        try {
            const resSingleData = await axios.get(singleproducturl);
            const data =await resSingleData.data;
            dispatch({ type: "SingleProduct", payload: data})

        } catch (e) {
            dispatch({ type: "SingleProduct-Error" })

        }

    }

    useEffect(() => {
        getproducts()
    }, [])


    return <Newcontext.Provider value={{ ...state, SingleProductData }}>
        {children}
    </Newcontext.Provider>
}


// custom hooks to use useContext any component in short
const UseProductContext = () => {
    return useContext(Newcontext)
}

// you can aloso import usecontext as you use this provider-data 
// like =>
// 1 = import {usecontext} from "r"
// 2 = import {Network} from "r"
// 3= const {objname}=useContext(Newcontext)


export { ProductProvider, Newcontext, UseProductContext };