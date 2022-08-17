import React from 'react'
import { NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='Nav'>
            <NavLink to='/Home' style={{textDecoration:'none',color:'black',fontSize:'x-large'}}>Home</NavLink>
            <NavLink to='/Students' style={{textDecoration:'none',color:'black',fontSize:'x-large'}}>Students</NavLink>
            <NavLink to='/Contact' style={{textDecoration:'none',color:'black',fontSize:'x-large'}}>Contact Us</NavLink>
        </div>
    )
}

export default Navbar