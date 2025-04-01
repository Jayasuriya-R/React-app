import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { useState } from "react";
import userContext from "./Utilities/userContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=> {
  const [userName, setUserName] = useState("Surya")
    return (
      <userContext.Provider value={{loggedIn : userName , setUserName}}>
        <div className="app">
           <Header/>
           <Outlet/>
        </div>
        </userContext.Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
          {
            path : "/",
            element:<Body/>
          },
          {
            path: "/about",
            element:<About/>,
          },
          {
            path:"/contact",
            element:<Contact/>
        },
        {
          path:"/grocery",
          element:<Suspense fallback={<Shimmer/>}>
            <Grocery/>
            </Suspense>
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>
        }
        ],
        errorElement:<Error/>}
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);