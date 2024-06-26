import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
 const location = useLocation();
 const navigate = useNavigate();
 console.log();
 return (
  <div className="bg-white border-b shadow-sm sticky top-0 z-50">
   <header className="flex justify-between  items-center px-3  max-w-6xl mx-auto">
    <div>
     <img
      onClick={() => navigate("/")}
      className="h-5 cursor-pointer"
      src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
      alt="logo"
     />
    </div>
    <div>
     <ul className="flex space-x-10">
      <li
       className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  border-b-[3px]  border-b-transparent ${
        location.pathname === "/" && " text-black border-b-red-500"
       }`}
       onClick={() => navigate("/")}
      >
       Home
      </li>
      <li
       className={` cursor-pointer py-3 text-sm font-semibold text-gray-400  border-b-[3px]  border-b-transparent ${
        location.pathname === "/offers" && " text-black border-b-red-500"
       }`}
       onClick={() => navigate("/offers")}
      >
       Offers
      </li>
      <li
       className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  border-b-[3px]  border-b-transparent ${
        location.pathname === "/sign-in" && " text-black border-b-red-500"
       }`}
       onClick={() => navigate("/sign-in")}
      >
       Sign in
      </li>
     </ul>
    </div>
   </header>
  </div>
 );
}
