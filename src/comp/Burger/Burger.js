import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import "./style.css"

function Burger({ toggle }) {
    return (
        <div class="burger" onClick={() => toggle()}>
            <MenuIcon className="icon" />
        </div>
    )
}

export default Burger
