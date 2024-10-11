import React from 'react';
import Siderbar from './Siderbar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='flex'> 
            <Siderbar/>
            <Outlet/>
        </div>
    );
}

export default Body;
