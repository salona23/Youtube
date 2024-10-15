import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({name,text}) => {
   
  return (
    <div className="flex shadow-sm p-[10px] rounded-md my-2">
      <img className="w-9 h-7 " alt="User icon" src={USER_ICON}></img>
      <div className="items-center">
      <span className="font-bold px-2">{name}</span>
      <span>{text}</span>
      </div>
      
    </div>
  );
};

export default ChatMessage;
