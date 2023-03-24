import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {   HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from './page/home';
import Articles from './page/articles';
import Gallery from './page/Gallery';
import Features from './page/Features';
import Testimonials from './page/Testimonials';
import Stats from './page/Stats';
import Videos from './page/Videos';
import Pricing from './page/Pricing';
import Events from './page/Events';
import Work from './page/Work';
import Skills from './page/Skills';
import Services from './page/Services';
import Team from './page/Team';
import Discount from './page/Discount'

const router = createBrowserRouter([
  // اهى دى مش محتاجة ان انا اعملها مسار الصفحة الرئيسية
  // http://localhost:3001
   {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Home/>,
    errorElement: <h1>sorry</h1>, // دا لو دخل على صفحة غلط يطلعلو الايرور دا
  },
// http://localhost:3001/html اهو المسار اهو 
  {
    path: "/articles", // دا المسار انا كنت شارحو فى اللرافال
    // element: <div>Hello world!</div>,
    element: <Articles/>,
  },

  {
    path: "/Gallery",
    // element: <div>Hello world!</div>,
    element: <Gallery/>,
  },

  {
    path: "/Features",
    // element: <div>Hello world!</div>,
    element: <Features/>,
  },

  {
    path: "/Testimonials",
    // element: <div>Hello world!</div>,
    element: <Testimonials/>,
  },

  {
    path: "/Discount",
    // element: <div>Hello world!</div>,
    element: <Discount/>,
  },

  {
    path: "/Stats",
    // element: <div>Hello world!</div>,
    element: <Stats/>,
  },

  {
    path: "/Videos",
    // element: <div>Hello world!</div>,
    element: <Videos/>,
  },

  {
    path: "/Pricing",
    // element: <div>Hello world!</div>,
    element: <Pricing/>,
  },

  {
    path: "/Events",
    // element: <div>Hello world!</div>,
    element: <Events/>,
  },

  {
    path: "/Work",
    // element: <div>Hello world!</div>,
    element: <Work/>,
  },

  {
    path: "/Skills",
    // element: <div>Hello world!</div>,
    element: <Skills/>,
  },

  {
    path: "/Services",
    // element: <div>Hello world!</div>,
    element: <Services/>,
  },

  {
    path: "/Team",
    // element: <div>Hello world!</div>,
    element: <Team/>,
  },



]);

 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();