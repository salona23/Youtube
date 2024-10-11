import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Siderbar = () => {
  const showMenu = useSelector((store) => store.menu.showMenu);
  if (!showMenu) return null;

  return (
    <div className="shadow-lg w-58 p-8">
      <div className="mb-4 font-bold">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>Shorts</li>
          <li>Subscribtions</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-bold ">Explore</li>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>Music</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
