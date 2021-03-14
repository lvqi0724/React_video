import React,{useState, useEffect} from 'react'
import './index.scss'
import menuImg from '../../static/img/menu.svg'
import searchImg from '../../static/img/serach.svg'
import LeftNav from '../leftNav'
import {withRouter} from 'react-router-dom'

const HeadBar = (props) =>{

    useEffect(() =>{
        return() =>{
            document.getElementsByTagName('body')[0].style.overflow = 'auto'
        }
    }, [])
    const [status, SetStatus] = useState(false)
    const changeStatus = () =>{
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        SetStatus(!status)
    }
    const hideBox = (e) =>{
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        SetStatus(false)
    }

    const gotoSearch = () =>{
        props.history.push('/search')
    }

    const gotoHome = () =>{
        props.history.push('/')
    }

    return (
        <div  className="headbar ">
            <div className="headbar-box">
                <div className='headbar-menu' onClick={changeStatus}>
                    <img src={menuImg} alt="" />
                </div>
                <div className='headbar-tit' onClick={gotoHome}>
                    <h1>夜游</h1>
                </div>
                <div  className='headbar-search' onClick={gotoSearch}>
                    <img src={searchImg} alt=""/>
                </div>
            </div>
            <LeftNav  status={status}  hide={hideBox}/>
        </div>
    )
}


export  default withRouter(HeadBar)