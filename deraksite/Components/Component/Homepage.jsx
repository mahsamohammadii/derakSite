import React from 'react'
import Article from '../Component/Article'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Introduction from '../Component/Introduction'
import Service from '../Component/Service'
import Timelinebase from '../Component/Timelinebase';
import Branding from '../Component/Branding';

export default function Homepage() {
    return (
        <>
            <Header/> 
           <Introduction/>
           <Timelinebase/>
           <Service/>
           <Branding/>
           <Article/>
           <Footer/>
        </>
    )
}
