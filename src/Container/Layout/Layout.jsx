import React from 'react'
import NavBar1 from '../../Component/Navbar/NavBar1'

const Layout = ({children}) => {
  return (
    <>
    <NavBar1/>
    {children}
    </>
  )
}

export default Layout