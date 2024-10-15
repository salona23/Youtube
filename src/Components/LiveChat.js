import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomComment, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const liveMessages = useSelector((store)=>store.chat.messages);
    const [sendChat,setSendChat] = useState("");

    useEffect(()=>{
        const timer = setInterval(()=>{
           dispatch(addMessage({
            name : generateRandomName(),
            text : generateRandomComment()
           }));
        //    console.log(generateRandomName(),generateRandomComment());
        },1500);
        return ()=> clearInterval(timer);
    },[])
    return (
        <>
        <div className="ml-8 p-2 w-[410px] h-[550px]  border border-gray-200 rounded-xl rounded-b-none overflow-scroll flex flex-col-reverse">
            {
                liveMessages.map((message,i)=> <ChatMessage key={i} name={message.name} text={message.text}/>)
            }
           
          
        </div>
        <form className='ml-8 p-2 flex  border border-gray-200 rounded-xl rounded-t-none'
        onSubmit={(e)=>{
            e.preventDefault();
            
            sendChat &&
            dispatch(addMessage({
                name : "Salona Dubey",
                text : sendChat,
            }));
            setSendChat("");
            
        }}
        >
            <input 
            className='rounded-full p-2 m-2 bg-gray-100 w-full'
            type='text' placeholder='chat..'
            value={sendChat}
            onChange={(e)=>setSendChat(e.target.value)}
            ></input>
            <button className='p-2 m-2 rounded-xl bg-red-600 text-white  hover:bg-red-700'>Send</button>
        </form>
        
        </>
    );
}

export default LiveChat;
