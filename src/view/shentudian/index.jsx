import React from  'react'
import HeadBar from "../../comopnents/heads";
import MySwiper from "../../comopnents/swiper";
import ListTitle from "../../comopnents/listTitle";
import ClassfiyList from "../../comopnents/classfiyList";
import BottomBar from "../../comopnents/boottomBar";

const Shentudian = () =>{

    return (
        <div>
            <HeadBar />
            <MySwiper />
            <ListTitle title={'中文字幕'} />
            <ClassfiyList type='中文字幕' />
            <BottomBar />
        </div>
    )
}

export default  Shentudian