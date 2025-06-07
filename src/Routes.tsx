import { createBrowserRouter } from "react-router-dom";
import RootNavLayout from "./rootNav";
import Home from "./Home";
import AboutUs from "./sections/AboutUs/aboutUs";
import ContactUs from "./sections/ContactUs/contactUs";
import CarRental from "./sections/CarRental/carRental";
import CarDetails from "./sections/CarDetails/carDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootNavLayout />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "carRental",
                element: <CarRental />,
            },
            {
                path: "carRental/:id",
                element: <CarDetails />,
              },
            {
                path: "aboutUs",
                element: <AboutUs />
            },
            {
                path: "contactUs",
                element: <ContactUs/>
            },

        ]
      
            


    }
]);


export default router