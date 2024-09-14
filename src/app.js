import React, {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {HeadingComponent} from "./components/Header";
import BodyComponent from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";


const root = ReactDOM.createRoot(document.getElementById("root"));
const About = lazy(()=> import("./components/About"));

const AppComponent = ()=>{
  const[userName,setUserName]= useState()
  useEffect(()=>{
    const data = {name : "Rahul"};
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
      <div className="app">
         <HeadingComponent />
         <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    children:[
      {
        path:"/",
        element:<BodyComponent/>

      },
      {
        path:"/about",
        element:<Suspense fallback={"Loading"}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantInfo />
      },
      {
        path:"/cart",
        element:<Cart />
      },
    ],
    errorElement:<Error/>
  }

]);






root.render(<RouterProvider router={appRouter}/>);