import React,{useEffect} from 'react'
import {signout} from '../utils/helpers'

export default function SignOut() {
    useEffect(()=>{
        signout(()=>{
            window.location.reload();
            window.location.href='/'
        });
    },[])
    return (
        <div>
          <h1>You have sucessfully Signout</h1>  
        </div>
    )
}
