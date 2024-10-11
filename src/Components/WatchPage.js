import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v")); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className="m-3 p-3">
      <iframe
      className="rounded-lg"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=NiM6QXxq7Z-7GSMH"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
