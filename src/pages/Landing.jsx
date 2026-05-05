import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../componenets/CocktailList";
import SearchTerm from "../componenets/SearchTerm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  // console.log(response.data.drinks[0]);  // this is the road to the data we want
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      {/* <SearchTerm /> */}
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
