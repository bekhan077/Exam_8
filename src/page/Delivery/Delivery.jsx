import React from 'react'
import InformationMap from '../../components/deliverys/InformationMap'
import IconsBar from '../../components/deliverys/IconsBar'
import Rules from '../../components/deliverys/Rules'
import Infarmation from '../../components/information/Infarmation'
import Document from '../../components/deliverys/Document'
import Question from '../../components/deliverys/Question'

const Delivery = () => {
    return (
        <div>
            <InformationMap />
            <IconsBar />
            <Rules />
            <Infarmation />
            <InformationMap />
            <Document />
            <Question />
        </div>
    )
}

export default Delivery
