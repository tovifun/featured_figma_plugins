import React, {useState} from 'react'
import './Slider.css'

//动态获取幻灯片
const list = [1,2,3,4,5,6,7,8]
const total = list.length

export default ({show, hideSlide}) => {
    const [state, setState] = useState({
        active: 0
    })
    const onClose = () => {
        if(hideSlide) hideSlide(false)
    }
    const prevHandler = () => {
        if(state.active < 1) return
        setState({
            active: --state.active
        })
    }
    const nextHandler = () => {
        if(state.active >= total - 1) return
        setState({
            active: ++state.active
        })
    }
    return <div className={`slider${show ? ' slider-show' : ''}`}>
        <div className="slider-body">
            <div className="slider-imgbox">
                <img className="slider-img" src={`images/figma_${list[state.active]}.jpg`} alt={state.active}/>
            </div>
            <div className="slider-footer">
                <svg onClick={onClose} className="slider-close" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="white" className="slider-button-bg"/>
                    <path d="M26 14L14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 14L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="slider-num">{state.active+1}/{total}</div>
                <div className="slider-btns">
                    <svg onClick={prevHandler} className="slider-prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" fill="white" className="slider-button-bg"/>
                        <path d="M23 26L17 20L23 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg onClick={nextHandler} className="slider-next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" fill="white" className="slider-button-bg"/>
                        <path d="M17 26L23 20L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}