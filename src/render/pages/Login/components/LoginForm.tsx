import { Button } from '@render/components/ui/button'
import { Input } from '@render/components/ui/input'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function LoginForm() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center gap-10 mb-3 text-black'>
            <div className='mt-3'>
                <h3>Welcome Please Sign</h3>
            </div>
            <div className='w-64'>
                <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className='w-64'>
                <Input type="password" placeholder="Password" />
            </div>
            <div >
                <Button className='w-64' onClick={() => navigate('/config')}>Sign In</Button>

            </div>
        </div>
    )
}

export default LoginForm