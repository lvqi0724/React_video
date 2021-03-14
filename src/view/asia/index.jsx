import React from  'react'
import HeadBar from "../../comopnents/heads";
import BottomBar from "../../comopnents/boottomBar";
import MySwiper from "../../comopnents/swiper";
import ListTitle from "../../comopnents/listTitle";
import ClassfiyList from "../../comopnents/classfiyList";

const Asia = () =>{

    return (
        <div>
            <HeadBar />
            <MySwiper />
            <ListTitle title={'亚洲无码'} />
            <ClassfiyList type='亚洲无码' />
            <BottomBar />
        </div>
    )
}

export default  Asia