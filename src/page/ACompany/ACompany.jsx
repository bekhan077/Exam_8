import React from 'react'
import Header from '../../components/header/Header'
import HomeFact from '../../components/home_icons_fact/HomeFact'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import Map from '../../components/map/Map'
import NashiClient from '../../components/NashiClients/NashiClient'
import GlobalMedicalTreyd from './GlobalMedicalTreyd'
import FiguresAndFact from './FiguresAndFact'
import Ourpartners from './Ourpartners'
import Doctors from './Doctors'
import Certificate from './Certificate'

const ACompany = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <GlobalMedicalTreyd />
            <FiguresAndFact />
            <Ourpartners />
            <Doctors />
            <NashiClient />
            <HomeFact />
            <BrendCarousel />
            <Certificate />
            <Map />
        </div>
    )
}

export default ACompany
