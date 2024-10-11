import React from 'react';

const Button = ({name}) => {
    return (
        <div >
            <button className="py-1 px-5 mx-2 my-4 bg-gray-100 rounded-md hover:bg-gray-200 ">{name}</button>
        </div>
    );
}

export default Button;
