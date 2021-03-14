import React from 'react'
import './index.scss'
import logoSvg from '../../static/img/logo.svg'
import {withRouter} from 'react-router-dom'

const LeftNav = ({hide ,status, history}) =>{

    const menuArr = [
        {title: '中文字幕', path : '/shentudian'},
        {title: '亚洲无码', path: '/asia'},
        {title: '欧美精品', path: '/occident'},
        {title: '成人动漫', path: '/cartoon' },
        {title: '国产精品', path: '/domestic'}
    ]

    const stopPro = (e) => {
        e.stopPropagation()
    }

    const goto = (p) =>{
        history.push(p)
    }

    return (
        <div className="leftNav" style={{ display: status ? 'block' : 'none' }} onClick={(e) => hide(e)}>
            <div className={`leftNav-box ${status ? 'leftNav-a1' : 'leftNav-a2'}`} onClick={(e) => stopPro(e)}>
                <div className='leftNav-tit' onClick={() => goto('/')}>
                    <img src={logoSvg} alt="" />
                </div>
                <div className='leftNav-jump'>
                    {menuArr.map((v, i) =>{
                        return (
                            <div key={i} className='leftNav-jump-c' onClick={() =>goto(v.path)}>
                                {v.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export  default  withRouter(LeftNav)