import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GrideView from './GrideView';
import ListView from './ListView';
const AllProduct = () => {

    const { filter_products, gride_view } = useFilterContext();



    if (gride_view) {
        return <>
            <GrideView products={filter_products} />
        </>
    }

    if(!gride_view){
        return <ListView products={filter_products}/>
    }
}

export default AllProduct;