import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { useState,useContext } from "react";
import UserContext from "./Utilities/UserContext.js"
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore.js";


//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=> {
  const [userName, setUserName] = useState("Surya")
  
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedIn : userName , setUserName}}>
        
        <div className="app">
           <Header/>
           <Suspense fallback={<Shimmer/>}>
           <Outlet/>
           </Suspense>
        </div>
        
        </UserContext.Provider>
        </Provider>
    );
};


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
          element:<Grocery/>
            
            
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
        ],
        errorElement:<Error/>}
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);