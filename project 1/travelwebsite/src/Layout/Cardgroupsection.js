import React from 'react'
import "./Cardgroupsection.css"
import Card from '../Components/Card'
import Space from '../Components/Space'
const Cardgroupsection = () => {
  return (
    <> 
    <Space></Space>
    <div className='container-fuild bgcardgroup '>
        <div className='container'>
            <div className='row justify-content-evenly'>
<Card classss="fa-solid fa-people-line "  counts="10K+" heading="Happy customers"></Card>
<Card classss="fa-solid fa-bus"  counts="247" heading="Comfortable vans"></Card>
<Card classss="
fa-solid fa-map-location-dot"  counts="3860" heading="Completed Tours"></Card>
            </div>

        </div>
    </div>
    <Space></Space>
    </>
  )
}

export default Cardgroupsection
