import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink as Link2 } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <>
    <nav className="bg-slate-200" >
      {/* <h1>TechStar</h1> */}
      <Link to="/"> <h1 className="text-4xl" >TechStar</h1> </Link>
      <main className="text-lg" >
        <Link2 to="/#home" >Home</Link2>
        <Link2 to="/#about" >About</Link2>
        <Link to="/contact" >Contact us</Link>
        <Link2 to="/#brand" >Brand </Link2>
        <Link to="/services" >Services</Link>
    
      </main>
    </nav>
    </>
  )
}

export default Navbar;