import React from 'react'
import './init.scss'
import loadGif from '../../static/img/load.gif'

const InitVideoCard = () =>{
    return (
        <div className="initVideoCard">
            <img src={loadGif} alt=""/>
        </div>
    )
}

export  default  InitVideoCard