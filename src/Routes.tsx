import { createBrowserRouter } from "react-router-dom";
import RootNavLayout from "./rootNav";
import Home from "./Home";
import AboutUs from "./sections/AboutUs/aboutUs";
import ContactUs from "./sections/ContactUs/contactUs";
import CarRental from "./sections/CarRental/carRental";
import CarDetails from "./sections/CarDetails/carDetails";
import AllTours from "./sections/AllTours/AllTours";
import CityTour from "./sections/AllTours/CityTour/CityTour";
import OutOfTownTour from "./sections/AllTours/OutOfTownTour/OutOfTownTour";


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
                path: "arackiralama",
                element: <CarRental />,
            },
            {
                path: "arackiralama/:id",
                element: <CarDetails />,
              },
            {
                path: "hakkimizda",
                element: <AboutUs />
            },
            {
                path: "iletisim",
                element: <ContactUs/>
            },
            {
                path: "turlar",
                element: <AllTours/>
            },
            {
                path: "sehir-ici-tur",
                element: <CityTour/>
            },
            {
                path: "sehir-disi-tur",
                element: <OutOfTownTour/>
            },


        ]
      
            


    }
]);


export default router