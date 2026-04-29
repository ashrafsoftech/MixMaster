import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  HomeLayout,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
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
