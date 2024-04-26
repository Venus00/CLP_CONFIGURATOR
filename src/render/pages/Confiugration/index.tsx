import React from 'react'
import SideBar from './components/SideBar'
import { MainCard } from './components/MainCard'
import DeviceForm from './components/ConfigForm/DeviceForm'

function Configuration() {
    const onDeviceSubmit = (data) => {
        console.log("onDeviceSubmit", data)
    }
    return (
        <div className='h-screen flex gap-3 font-'>
            <SideBar />
            <div className='flex-1'>
                <MainCard title='Device' callback={onDeviceSubmit} />
            </div>
        </div>
    )
}

export default Configuration