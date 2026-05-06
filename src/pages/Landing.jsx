import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../componenets/CocktailList";
import SearchTerm from "../componenets/SearchTerm";
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const apiUrl = searchTerm
        ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

      const response = await axios.get(apiUrl);
      return response.data.drinks || [];
    },
  };
};

export const loader =
  (QueryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await QueryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm),
  );

  if (isLoading) return <h4>Loading...</h4>;
  return (
    <>
      <SearchTerm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
