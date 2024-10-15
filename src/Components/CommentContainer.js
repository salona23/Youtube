import React from "react";
import { USER_ICON } from "../utils/constants";
const commentData = [
  {
    name: "Salona Dubey",
    text: "This video is amazing!, I have subscribed to your Channel.",
    replies: [
        {
        name: "Salona Dubey",
        text: "This video is amazing!, I have subscribed to your Channel.",
        replies: [{
            name: "Salona Dubey",
            text: "This video is amazing!, I have subscribed to your Channel.",
            replies: [{
                name: "Salona Dubey",
                text: "This video is amazing!, I have subscribed to your Channel.",
                replies: [],
              },],
          },],
      },],
  },
  {
    name: "Salona Dubey",
    text: "This video is amazing!, I have subscribed to your Channel.",
    replies: [{
        name: "Salona Dubey",
        text: "This video is amazing!, I have subscribed to your Channel.",
        replies: [],
      },
      {
        name: "Salona Dubey",
        text: "This video is amazing!, I have subscribed to your Channel.",
        replies: [{
            name: "Salona Dubey",
            text: "This video is amazing!, I have subscribed to your Channel.",
            replies: [],
          },],
      },
      {
        name: "Salona Dubey",
        text: "This video is amazing!, I have subscribed to your Channel.",
        replies: [],
      },
    ],
  },
  {
    name: "Salona Dubey",
    text: "This video is amazing!, I have subscribed to your Channel.",
    replies: [],
  },
  {
    name: "Salona Dubey",
    text: "This video is amazing!, I have subscribed to your Channel.",
    replies: [],
  },
];

const Comment = ({ data }) => {
    // console.log(data);
  const {name, text, replies} = data;
  return (
    <div className="flex shadow-sm rounded-lg bg-gray-50 p-2 my-3">
      <div>
        <img className="w-12 h-10" alt="User-Image" src={USER_ICON} />
      </div>
      <div className="px-2 mt-[-4px]">
        <p className="font font-bold"> {name}</p>
        <p>{text}</p>
        {
            replies.map((data,i) => <Comment key={i} data={data}/>)
        }
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <div className="font font-bold text-xl my-5 py-2">Comments</div>
      <div>
        
        {
            commentData.map((data,i)=><Comment key={i} data={data} />)
        }
      </div>
    </div>
  );
};

export default CommentContainer;
