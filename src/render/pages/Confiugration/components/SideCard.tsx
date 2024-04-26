import { title } from 'process'
import React from 'react'

interface PropsType {
    title: String;
    value: String;
}
function SideCard({ title, value }: PropsType) {
    return (
        <div className='w-64 h-16 rounded-md bg-white'>
            <p className='ml-3 font-bold text-black'>{title}</p>
            <p className='ml-3 text-gray-600'>{value}</p>

        </div>
    )
}

export default SideCard