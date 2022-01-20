import React from 'react'
import './InicioLogo.css'
import Image from 'react-bootstrap/Image'
import { useState } from 'react'
import UserAdd from '../UserAdd/UserAdd'
import { useParams } from 'react-router-dom'

const InicioLogo = () => {
    const [user,setUser]=useState([])
    const [userLog,setUserLog]=useState(false)
    //const { userOK }  =useParams

    function addUser(){
        setUser(
            console.log(user)
        )
        setUserLog(true)
    }

    return (
        <div>{userLog?
            <div className='imglogo'><Image src='/Statics/wallpoke.jpg' /></div> :
                <><UserAdd funcionAdd= {addUser} />
                <div className='imglogo'><Image src='/Statics/wallpoke.jpg' /></div></> }
        </div>
    )
}

export default InicioLogo