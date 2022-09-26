import React from 'react'
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';

const LogOut = () => {

    const logOutFunc = () => {
        signOut(auth)
    }
    
    return (
        <section className='d-flex flex-column align-items-right justify-content-right'>
            <button  onClick={logOutFunc} className='btn btn-success 3'style ={{width:'100px', marginRight: '1rem',}}>LogOut</button>
        </section>
    )
}

export default LogOut