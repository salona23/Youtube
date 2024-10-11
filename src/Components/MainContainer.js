import React, { useEffect } from 'react';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';

const MainContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(openMenu());
    },[]);
    return (
        <div className='ml-6'> 
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;
