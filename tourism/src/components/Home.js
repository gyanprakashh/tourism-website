import React, { Component } from 'react'
import '../css/Home.css'
import {Category} from './Category';
import BorderComp from './BorderComp';
import Banner from './Banner'
import HomeBanner from './HomeBanner'
import SecondBanner from './SecondBanner'
import Footer from './Footer'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <HomeBanner />
            {/* <Carousels /> */}
            <BorderComp />
            <h1 className="h1-god" style={{color:"#3c2946", fontSize:"65px", fontWeight:"900",fontFamily:" 'Josefin Sans', sans-serif"}}>The Land Of Gods</h1>
            <Category />
            <BorderComp />
            <br/>
            <Banner />
            <br/>
            <BorderComp />
            <SecondBanner />
            <BorderComp />
            <Footer />
            </>

        )
    }
}

export default Home
