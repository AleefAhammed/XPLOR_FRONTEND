import React from 'react'
import OverviewHeader from '../components/ProductOverview/OverviewHeader'
import ProductOverviewComponent from '../components/ProductOverview/ProductOverviewComponent'
import { useParams } from 'react-router-dom'

function ProductOverviewPage() {

    const { id } = useParams();
    // console.log(id);
    return (
        <>
            <OverviewHeader />
            <ProductOverviewComponent id={id} />
        </>
    )
}

export default ProductOverviewPage

