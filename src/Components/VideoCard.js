

const VideoCard = ({info}) => {
    if(!info) return null;
    // console.log(info);
    const {snippet,statistics} = info;
    
  return (
   <div className="p-2 my-2 w-72 h-74 cursor-pointer shadow-sm mx-4 rounded-lg" >
    <img className="rounded-xl" 
    alt="Video-thumbnail" src={snippet.thumbnails.medium.url}></img>
    <ul>
    <li className="font-bold py-2">{snippet.title}</li>
    <li>{snippet.channelTitle}</li>
    <li>{statistics.viewCount} views</li>
    </ul>

    </div>
  );
};

export default VideoCard;
