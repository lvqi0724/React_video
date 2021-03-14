import React from  'react'
import HeadBar from "../../comopnents/heads";
import MySwiper from "../../comopnents/swiper";
import ListTitle from "../../comopnents/listTitle";
import ClassfiyList from "../../comopnents/classfiyList";
import BottomBar from "../../comopnents/boottomBar";

const Cartoon = () =>{

    return (
        <div>
            <HeadBar />
            <MySwiper />
            <ListTitle title={'成人动漫'} />
            <ClassfiyList type='成人动漫' />
            <BottomBar />
        </div>
    )
}

export default  Cartoon