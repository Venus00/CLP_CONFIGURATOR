import React from 'react'
import SideCard from './SideCard'

function SideBar() {
    return (
        <div className='w-80 flex flex-col m-3 justify-center items-center gap-3 rounded-md bg-[#334155]'>
            <div className='w-36 h-40 rounded-md  bg-white'></div>
            <SideCard title='Device ID' value='--' />
            <SideCard title='Firmware Version' value='--' />
            <SideCard title='Port' value='--' />
            <SideCard title='Ip Addresse' value='--' />
            <SideCard title='BoatLoader Version' value='--' />
        </div>
    )
}

export default SideBar