import React from 'react'
import ActiveNabvar from '../activeNabvar'

const Navbar = () => {
    return (
        <nav>
            <ActiveNabvar href={'/home'} text={'Home'} />
            <ActiveNabvar href={'/about'} text={'About'} />
            <ActiveNabvar href={'/contact'} text={'Contact'} />
        </nav>
    )
}

export default Navbar