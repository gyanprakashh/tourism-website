import React from 'react'
import {Image} from 'react-bootstrap'
import '../css/Card.css'

export  function Cards(props) {
    return (
        <>
        <Image className="hovver" src={props.srcc} style={{height:'17rem', width:"20rem", borderRadius:"10%", border:"6px solid #3c2946"}}  />
            
        </>
    )
}
