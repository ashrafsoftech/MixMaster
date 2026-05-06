// import { useLoaderData } from "react-router-dom";
// import axios from "axios";
// import CocktailList from "../componenets/CocktailList";
// import SearchTerm from "../componenets/SearchTerm";

// const cocktailSearchUrl = searchTerm
//   ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
//   : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
// // "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);

//   const searchTerm = url.searchParams.get("search") || "";
//   const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

//   // console.log(response.data.drinks[0]);  // this is the road to the data we want
//   return { drinks: response.data.drinks, searchTerm };
// };

// const Landing = () => {
//   const { drinks, searchTerm } = useLoaderData();

//   return (
//     <>
//       <SearchTerm searchTerm={searchTerm} />
//       <CocktailList drinks={drinks} />
//     </>
//   );
// };
// export default Landing;
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../componenets/CocktailList";
import SearchTerm from "../componenets/SearchTerm";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";

  const apiUrl = searchTerm
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

  const response = await axios.get(apiUrl);

  return { drinks: response.data.drinks || [], searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <SearchTerm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;