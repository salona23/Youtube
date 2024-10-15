import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import SponsoredVideoCard from "./SponsoredVideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json.items);
  };
  const AdVideoCard = SponsoredVideoCard(VideoCard);
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {
          videos.map((video,index)=>
            <Link key={video.id} to={"/watch?v="+video.id}>
          {index===0?<AdVideoCard info={video}/>: <VideoCard info={video} />}
          </Link>
          )
       
      }
    </div>
  );
};

export default VideoContainer;
