
const SponsoredVideoCard = (VideoCard) => {
    return ({info}) => (
        <div>
          <VideoCard info={info} sponsord={true} />
          <p className="text-gray-300 mx-4 p-2  mt-[-20px]">Sponsored</p>
        </div>
     
    )
  };

  export default SponsoredVideoCard;