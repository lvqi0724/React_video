import React, {useState, useEffect} from 'react'
import ReactPullLoad, { STATS } from "react-pullload";
import "react-pullload/dist/ReactPullLoad.css";
import {getVideoByTypeAndPage} from "../../api/video";
import VideoCard from "../videoCard";
import './index.scss'

const ClassfiyList = ({type}) =>{
    const [state, setState] = useState({
        hasMore: true,
        data: [],
        action: STATS.init,
        index: 0,
        count: 0,
    })

    useEffect(() =>{
        getVideoByTypeAndPage(type,1).then(res =>{
            if(res.code === 200){
                setState({
                    ...state,
                    data: res.data,
                    index:1,
                    count: res.count
                })
            }
        })
    }, [])

    const handleAction = action => {
        if (action === state.action) {
            return false;
        }
        if (action === STATS.refreshing) {
            //刷新
            return false
        } else if (action === STATS.loading) {
            //加载更多
            handLoadMore();
        } else {
            //DO NOT modify below code
            setState({
                ...state,
                action: action
            });
        }
    };



    const handLoadMore = () => {
        if (STATS.loading === state.action) {
            return false;
        }
        //无更多内容则不执行后面逻辑
        if (!state.hasMore) {
            return;
        }
        if (state.index > state.count / 20 ) {
            setState({
                ...state,
                action: STATS.reset,
                hasMore: false
            });
            return
        } else {
            getVideoByTypeAndPage(type,state.index+1).then(res =>{
                if(res.code === 200){
                    const  arr = state.data
                    arr.push(...res.data)
                    setState({
                        ...state,
                        data: arr,
                        action: STATS.reset,
                        index: state.index + 1,
                        count: res.count,
                    });
                }
            })
        }
        setState({
            ...state,
            action: STATS.loading
        });
    }
    return (
        <div className='classfiyList'>
            <ReactPullLoad
                downEnough={150}
                action={state.action}
                handleAction={handleAction}
                hasMore={state.hasMore}
                distanceBottom={200}
            >
                <div className='classfiyList-box'>
                    {state.data.map((v, index) => {
                        return (
                            <div key={index} className='classfiyList-box-c'>
                                <VideoCard data={v} />
                            </div>
                        );
                    })}
                </div>


            </ReactPullLoad>
        </div>
    )
}

export default ClassfiyList