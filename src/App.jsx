import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
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
        loader: landingLoader(queryClient),
      },
      { path: "about", element: <About /> },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: SingleCocktailLoader(queryClient),
      },
      { path: "newsletter", element: <Newsletter />, action: newsletterAction },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
