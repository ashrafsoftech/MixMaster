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
      { path: "cocktail", element: <Cocktail /> },
      { path: "newsletter", element: <Newsletter /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
