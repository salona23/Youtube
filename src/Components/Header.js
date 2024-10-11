import { useDispatch } from "react-redux";
import { MENU_ICON, USER_ICON, YOUTUBE_ICON } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    const action = dispatch(toggleMenu());
    console.log(action);
  };
 

  return (
    <div className="grid grid-flow-col shadow-md">
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
      <div className="col-span-10 text-center ">
        <input
          className="border border-gray-400 rounded-l-3xl p-2 my-2 w-1/2"
          type="text"
          placeholder="Search"
        ></input>
        <button className="bg-gray-100 rounded-r-3xl p-2 my-2 hover:bg-gray-200">Search</button>
      </div>

      <div className="col-span-1 m-2">
        <img className="w-10 h-7" alt="User icon" src={USER_ICON}></img>
      </div>
    </div>
  );
};

export default Header;
