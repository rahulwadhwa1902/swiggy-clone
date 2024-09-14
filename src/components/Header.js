import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const HeadingComponent = ()=>{

    const[loginButton,setLoginButton]=useState("Login")
    const onlineStatus = useOnlineStatus();
    
    const {loggedInUser} = useContext(UserContext);

    // subscribing to our store 
    const cartItems = useSelector(store =>store.cart.items);
    return (
    <div className="flex">
        <div className="w-56 mr-60">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="flex ml-[300px]">
            <ul className="flex justify-items-end p-8 m-8">
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md">Online : {onlineStatus ? "✅" : "🔴"}</li>
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md"><Link to={"/"}>Home</Link></li>
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md"><Link to={"/about"}>About</Link></li>
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md"><Link to={"/contact"}>Contact Us</Link></li>
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md"><Link to={"/cart"}>Cart({cartItems.length})</Link> </li>
                <button className= "p-2 rounded-md bg-slate-500 hover:shadow-lg"
                 onClick={()=>{
                   loginButton === "Login" ? setLoginButton("LogOut") : setLoginButton("Login");
                }}>
                    {loginButton}
                </button>
                <li className="m-4 px-4 text-lg hover:bg-slate-500  p-2 rounded-md">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
};

export default HeadingComponent;