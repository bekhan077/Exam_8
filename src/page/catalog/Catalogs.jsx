import React from 'react'
import Directions from '../../components/CatalogsComponents/Directions/Directions'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import NavostiyCompany from '../../components/carusels/NavostiyCompany'
import Infarmation from '../../components/information/Infarmation'
import Map from '../../components/map/Map'
import Podpisku from '../../components/podpisku/Podpisku'

const Catalogs = () => {
    return (
        <div>
            <Directions />
            <CompanyCarousel />
            <HomeFact />
            <CatalogCarouselData />
            <BrendCarousel />
            <NavostiyCompany />
            <Infarmation />
            <Map />
            <Podpisku/>
        </div>
    )
}

export default Catalogs
