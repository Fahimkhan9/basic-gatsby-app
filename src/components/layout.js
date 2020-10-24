import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import './layout.css'
const layout = ({children}) => {
    return (
        <>
           <Navigation/>
           <main>
               {children}
           </main>
           <Footer/>
        </>
    )
}

export default layout
