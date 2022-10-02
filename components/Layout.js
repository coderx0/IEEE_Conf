import React from 'react'
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <Navbar>
        <main>
            {children}
        </main>
    </Navbar>
  )
}

export default Layout