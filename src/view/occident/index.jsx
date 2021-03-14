import React from  'react'
import HeadBar from "../../comopnents/heads";
import MySwiper from "../../comopnents/swiper";
import ListTitle from "../../comopnents/listTitle";
import ClassfiyList from "../../comopnents/classfiyList";
import BottomBar from "../../comopnents/boottomBar";

const Occident = () =>{

    return (
        <div>
            <HeadBar />
            <MySwiper />
            <ListTitle title={'欧美精品'} />
            <ClassfiyList type='欧美精品' />
            <BottomBar />
        </div>
    )
}

export default  Occident