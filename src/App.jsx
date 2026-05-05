import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  HomeLayout,
  SinglePageError,
} from "./pages/index.js";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as SingleCocktailLoader } from "./pages/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      { path: "about", element: <About /> },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: SingleCocktailLoader,
      },
      { path: "newsletter", element: <Newsletter />, action: newsletterAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
