
import React from 'react'
import './index.scss'
import GPlayer from 'griffith'



const Player = ({  data }) => {
    const sources = {
        hd: {
               play_url: data.VideoUri,
                format: "m3u8"
            },
    }

    return (
        <>
            <div className='player'>
                <GPlayer  id='test' useMSE={true} sources={sources} />
                <div className='player-info'>
                    <div    className='player-info-box'  >{data.Title}</div>
                    <div className='player-info-box' >{data.VideoClass}</div>
                    <div className='player-info-box' >{data.Timer}</div>
                </div>
            </div>
        </>
    )
}

export default Player