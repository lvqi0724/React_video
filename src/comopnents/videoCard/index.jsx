import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import loadGif from '../../static/img/load.gif'
import LazyLoad from 'react-lazyload';

const VideoCard = ({data}) =>{

    return (
        <Link to={`/detail/${data.ID}`} >
            <div className="videoCard"  style={{background: `url(${loadGif})`}}>
                <div className="videoCard-c">
                    <LazyLoad >
                        <img src={data.ImgUri} alt=""/>
                    </LazyLoad>

                    <div className='videoCard-box'>
                        <div className="videoCard-info">
                            <div className="videoCard-title">
                                {data.Title}
                            </div>
                            <div className="videoCard-t">
                                {data.Timer}
                            </div>
                            <div className="videoCard-type">
                                {data.VideoClass}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    )
}

export  default  VideoCard