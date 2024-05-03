import Directors from "./pages/Directors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/Errorpage";


const routes = [
   {path:"/",element:<Home/>,errorElement:<ErrorPage/>},
   {path:"/movie/:id",element:<Movie />},
   {path:"/directors",element:<Directors />},
   {path:"/actors",element:<Actors />}
  ];

export default routes;