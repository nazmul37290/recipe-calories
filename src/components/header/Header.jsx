import "./header.css";
import { IoPersonCircleOutline } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-4xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipe</a>
            </li>
            <li>
              <a>About </a>
            </li>

            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center bg-[#150B2B] bg-opacity-10 px-4 py-2 rounded-3xl mr-4">
            <CiSearch className="text-xl m-2" />

            <input
              className="outline-none bg-transparent"
              type="text"
              name=""
              id=""
              placeholder="search"
            />
          </div>
          <div className="bg-[#0BE58A] rounded-full w-10 h-10 flex items-center justify-center">
            <IoPersonCircleOutline className=" text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
