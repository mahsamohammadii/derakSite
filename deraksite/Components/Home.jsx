import React from 'react'
import Article from './Component/Article'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Introduction from './Component/Introduction'
import Service from './Component/Service'
import Timelinebase from './Component/Timelinebase'

export default function Home() {
    return (
        <>
           <Header/> 
           <Introduction/>
           <Timelinebase/>
           <Service/>
           <Article/>
           <Footer/>
        </>
    )
}
