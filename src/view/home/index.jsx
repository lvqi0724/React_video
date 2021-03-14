import React, {useEffect,useState} from 'react'

import HeadBar from "../../comopnents/heads";
import MySwiper from "../../comopnents/swiper";
import ListTitle from "../../comopnents/listTitle";
import VideoCard from "../../comopnents/videoCard";
import InitVideoCard from '../../comopnents/videoCard/init'
import './index.scss'
import BottomBar from "../../comopnents/boottomBar";
import {getHotList} from "../../api/video";

const Home = () => {
    const [lists, setLists] = useState([])

    useEffect(() =>{
        getHotList().then(res =>{
            if(res.code === 200){
                setLists(res.data)
            }
        })
    }, [])

    const renderVideoList = () => {
        return (
            <div className='home-list'>
                {lists.map((v, i) => {
                    return (
                        <div className="home-list-box" key={i}>
                            <VideoCard data={v} />
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderInitVideoList = () =>{
        return (
            <div className='home-list'>
                {[1, 1, 1, 11, 1, 1, 1, 11, 1, 1].map((v, i) => {
                    return (
                        <div className="home-list-box" key={i}>
                            <InitVideoCard/>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='home'>
            <HeadBar/>
            <MySwiper/>
            <ListTitle title="最新视频"/>
            {lists.length > 1 ? renderVideoList() : renderInitVideoList()}
            <div className="home-bottom">
                <BottomBar />
            </div>
        </div>
    )

}

export default Home