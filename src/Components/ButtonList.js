import React from 'react';
import Button from './Button';

const ButtonList = () => {

    const suggestionList = ["All","Mixes","Music","Gaming","Cricket","React","Javascript","News","Java","Stock Market","Comedy"];
    return (
        <div className='flex flex-nowrap mx-4 my-2'>
            {
                suggestionList.map((x)=> <Button key={x} name={x}/>)
            }
           
        </div>
    );
}

export default ButtonList;
