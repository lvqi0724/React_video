import React, {useState} from 'react'
import './index.scss'
import {CSSTransition} from 'react-transition-group'
import searchLoadGif from '../../static/img/searchLoad.gif'
import {searchLIke} from "../../api/video";
import {Link} from 'react-router-dom'

const SearchInput = () => {
    const [bus, setBus] = useState(false)
    const [status, setStatus] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [resDates, setResDates] = useState([])

    const handleClickSearch = () => {
        if(!bus){
            setBus(true)
            setStatus(true)
        } else {
            return
        }
        searchLIke(searchValue).then(res =>{
            if(res.code === 200){
                setResDates(res.data)
                setTimeout(() =>{
                    setBus(false)
                },1000)
            }
        })
    }

    const hideSeracgResBox = () =>{
        setStatus(false)
    }

    const handleChangeInputValue = (e) => {
        setSearchValue(e.target.value)
    }

    const renderSearchRes = () => {
        return (
            <CSSTransition
                in={status}
                classNames="content"
                timeout={1000}
            >
                <div className='searchRes'>
                    <div className='searchRes-box'>
                        {status ? renderSearchShow() : renderSearchHide()}
                    </div>
                </div>
            </CSSTransition>
        )
    }

    const renderSearchInit = () => {
        return (
            <div className='searchRes-box-init'>
                <img src={searchLoadGif} alt=""/>
            </div>
        )
    }

    const renderSearchShow = () => {
        return (
            <div className='searchRes-box-show'>
                {resDates.length > 0 ? renderSearchOk() : renderSearchInit()}
            </div>
        )
    }

    const renderSearchOk = () => {
        return (
            <div>
                {resDates.map((v, i) => {
                    return (
                        <Link to={`/detail/${v.ID}`} key={i}>
                            <div className='searchRes-box-show-c' >
                                {v.Title}
                            </div>
                        </Link>
                    )
                })}
                <div className='searchRes-box-show-c searchRes-box-show-c-close' onClick={hideSeracgResBox}>
                    关闭
                </div>
            </div>
        )
    }

    const renderSearchHide = () => {
        return (
            <div className='searchRes-box-hide'>
            </div>
        )
    }


    return (
        <div className="compensationHeight">
            <div className='searchInput'>
                <div className='searchInput-i'>
                    <input value={searchValue} placeholder='搜索片名' type="text" onChange={e => handleChangeInputValue(e)}/>
                </div>
                <div className='searchInput-b' onClick={handleClickSearch}>
                    搜索
                </div>
            </div>
            {renderSearchRes()}
        </div>

    )
}


export default SearchInput