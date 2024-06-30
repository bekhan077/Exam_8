import React from 'react'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import PopularCategories from '../../components/carusels/PopularCategories'
import ProductPage from '../../components/ProductPage/ProductPage'

const Product = () => {
    return (
        <div className='w-[100%] mx-auto mt-[10px]'>
            {/* <ProductPage /> */}
            <CatalogCarouselData />
            <CompanyCarousel />
            <PopularCategories />
            <BrendCarousel />
        </div>
    )
}

export default Product
