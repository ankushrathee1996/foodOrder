// import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutUs from "./components/body/navigationBar/AboutUs";
import ContactUs from "./components/body/navigationBar/ContactUs";
import Error from "./components/body/navigationBar/Error";
import RestaurantMenu from "./components/body/RestaurantMenu/RestaurantMenu";
// import Grocery from "./components/body/navigationBar/Grocery";
import { lazy, Suspense } from "react";

// Header
//  -logo
//  -navbar

// Body
//  -search
//  -restaurant container
//   -restaurant card
//      -image
//      -Name of res, rating, cuisine, delivery time
//
// Footer
//  -copyright
//  -links
//    -About us
//    -Help
//    -career

const Grocery = lazy(()=> import("./components/body/navigationBar/Grocery"))

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  }
]);

export default App;
