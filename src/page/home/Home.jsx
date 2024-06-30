import React from 'react'
import HomeCarousel from '../../components/carusels/HomeCarousel'
// import HomeCategorie from '../../components/categories/HomeCategorie'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import NashiClient from '../../components/NashiClients/NashiClient'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import Infarmation from '../../components/information/Infarmation'
import NavostiyCompany from '../../components/carusels/NavostiyCompany'
import Map from '../../components/map/Map'
import Podpisku from '../../components/podpisku/Podpisku'

const Home = () => {
  return (
    <div className='w-[100%] mx-auto'>
      <HomeCarousel />
      {/* <HomeCategorie /> */}
      <CompanyCarousel />
      <HomeFact />
      <CatalogCarouselData />
      <NashiClient />
      <BrendCarousel />
      <Infarmation />
      <NavostiyCompany />
      <Map />
    </div>
  )
}

export default Home
