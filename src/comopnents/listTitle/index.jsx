import React from 'react'
import './index.scss'

const ListTitle = ({title}) =>{

    return (
        <div className='listTitle'>
            <div className='listTitle-c'>
                {title}
            </div>
        </div>
    )
}

export  default  ListTitle