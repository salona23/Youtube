import { useDispatch, useSelector } from "react-redux";
import { MENU_ICON, USER_ICON, YOUTUBE_ICON } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addSearchResults } from "../utils/searchSlice";

const Header = () => {

  const [searchKeyword,setSearchKeyword] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  //calling the search Result data from the redux store
  const searchCache = useSelector((store)=>store.search);

  useEffect(()=>{
   const timer = setTimeout(()=>{
    if(searchCache[searchKeyword]) setSuggestions(searchCache[searchKeyword]);
    else getSearchSuggestions();
  }
    ,200);
   return ()=>{
    clearTimeout(timer);
   }
    
  },[searchKeyword]);

  const getSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API +searchKeyword);
    const json = await data.json();
    dispatch(addSearchResults({
      [searchKeyword] : json[1],
    }));

    // console.log(searchKeyword); 
    console.log(json[1]);
    setSuggestions(json[1]);
    
  }
  const handleClick = () => {
    const action = dispatch(toggleMenu());
    // console.log(action);
  };
  

 
  return (
    <div className="grid grid-flow-col shadow-md z-10">
      <div className="flex mx-4 col-span-1">
        <img
          className="w-12 h-12 my-2 cursor-pointer"
          alt="Menu icon"
          src={MENU_ICON}
          onClick={() => handleClick()}
        ></img>

        <img
          className="w-28 h-18 cursor-pointer"
          alt="Youtube icon"
          src={YOUTUBE_ICON}
        ></img>
      </div>
      <div className="col-span-9">
        <div className="flex justify-center">
        <input
          className="border border-gray-400 rounded-l-full p-2 my-2 w-1/2 indent-3"
          type="text"
          placeholder="Search"
          value={searchKeyword}
          onChange={(e)=>setSearchKeyword(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          onScroll={()=>setShowSuggestions(false)}
        ></input>
        <button className="bg-gray-100 rounded-r-3xl p-2 my-2 hover:bg-gray-200">Search</button>
        </div>
        { showSuggestions && 
      <div className="fixed bg-white w-[31rem] border border-gray-100 rounded-md cursor-default mx-[14rem]">
          <ul>
            {
              suggestions.map((s)=>
                <li className="mx-2 py-1 px-2 hover:bg-gray-100">{s} </li>
              )
            }
             
          </ul>
        </div>}
        
      </div>

      <div className="col-span-2 m-2 flex justify-end">
        <img className="w-10 h-7 mr-4 mt-2" alt="User icon" src={USER_ICON}></img>
      </div>
    </div>
  );
};

export default Header;
