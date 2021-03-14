import React, {useEffect, useState} from 'react'
import HeadBar from "../../comopnents/heads";
import BottomBar from "../../comopnents/boottomBar";
import {getVideoByIdAndLike} from "../../api/video";
import Player from "../../comopnents/player";
import VideoCard from "../../comopnents/videoCard";
import './index.scss'

const Detail = (props) =>{
    const [data, setData] = useState({})
    useEffect(() =>{
        getVideoByIdAndLike(props.match.params.id).then(res =>{
            if (res.code === 200){
                setData(res)
            }
        })
    },[])

    const RenderMore = ({data}) =>{
        return (
            <div className='detail-more'>
                {data.map((v, i) =>{
                    return (
                        <div className='detail-more-box' key={i}>
                            <VideoCard data={v} />
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='detail'>
            <HeadBar/>
            {data && data.data ? <Player data={data.data} /> : ""}
            {data && data.data ? <RenderMore data={data.more} />: ""}
            {data && data.data ? <BottomBar /> : ""}
        </div>
    )
}

export default Detail