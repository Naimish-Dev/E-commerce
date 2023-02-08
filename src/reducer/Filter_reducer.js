
const reducer = (state, action) => {


    switch (action.type) {
        case "Load_Filter_Products":
            const PriceData = action.payload.map((currentVal) => currentVal.price);

            // Find fexvalue 
            // 1  const Maxprice=Math.max.apply(null,PriceData)
            // 2  const Maxprice = PriceData.reduce((intialval, currentVal) => Math.max(intialval, currentVal) ,0)
            const Maxprice = Math.max(...PriceData)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter: { ...state.filter, maxPrice: Maxprice, price: Maxprice }
            };

        case "Gride_View":
            return {
                ...state,
                gride_view: true
            };
        case "List_View":
            return {
                ...state,
                gride_view: false
            };

        case "Select_Sort_Product_Option":
            return {
                ...state,
                SortedType: action.payload
            }

        case "ProductSort_Chang":
            let new_sort_product;
            const { filter_products } = state
            const oldproduct = [...filter_products]

            const sortProducts = (a, b) => {

                if (state.SortedType === "a-z") {
                    return a.name.localeCompare(b.name)
                }

                if (state.SortedType === "z-a") {
                    return b.name.localeCompare(a.name)
                }
                if (state.SortedType === "price-high") {
                    return b.price - a.price;
                }
                if (state.SortedType === "price-low") {
                    return a.price - b.price;

                }
            }
            new_sort_product = oldproduct.sort(sortProducts)
            return {
                ...state,
                filter_products: new_sort_product
            }

        case "serchtext":
            const { name, value } = action.payload
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            };


        case "serch_product_find":
            let { all_products } = state
            let tempProcut = [...all_products]
            const { text, category, company, color, price } = state.filter
            if (text) {
                tempProcut = tempProcut.filter((value) => {
                    return value.name.toLowerCase().includes(text)
                })
            }
            if (category !== "all") {
                tempProcut = tempProcut.filter((value) => {
                    return value.category === category
                })
            }
            if (company !== "all") {
                tempProcut = tempProcut.filter((value) => {
                    return value.company === company
                })
            }
            if (color !== "all") {
                tempProcut = tempProcut.filter((value) => {
                    return value.colors.includes(color)
                })
            }
            if (price === 0) {
                tempProcut = tempProcut.filter((value) => value.price === 0)
            } else {
                tempProcut = tempProcut.filter((value) => value.price <= price)
            }
            return {
                ...state,
                filter_products: tempProcut
            };

        case "Clreare_filter":            
            // const PriceData2= action.payload.map((currentVal) => currentVal.price);
            // const Maxprice2 = Math.max(...PriceData2)
            return {
                ...state,
                filter: { 
                    ...state.filter,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filter.maxPrice,
                    price: state.filter.maxPrice,
                    minPrice: 0,
                    }
            };

        default:
            return state
    }

}

export default reducer