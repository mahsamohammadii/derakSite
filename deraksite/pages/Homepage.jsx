import React from 'react'
import Article from '../Components/Component/Article'
import Footer from '../Components/Component/Footer'
import Header from '../Components/Component/Header'
import Introduction from '../Components/Component/Introduction'
import Service from '../Components/Component/Service'
import Timelinebase from '../Components/Component/Timelinebase';
import Branding from '../Components/Component/Branding';

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
