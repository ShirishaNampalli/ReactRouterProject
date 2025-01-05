import axios from "axios";
import React from "react";
import { useLoaderData, useParams} from "react-router";
import DetailedPage from "./DetailedPage";
import Wrapper from "../assets/wrappers/Cocktail";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const singleSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  //  const singleSearchUrl = import.meta.env.VITE_SINGLE_SEARCH_URL ;

const singleCocktailQuery = (id) =>{
  return{
    queryKey: ["cocktail", id],
    queryFn: async ()=>{
      const { data } = await axios.get(`${singleSearchUrl}${id}`);
      return data;
    }

  }
}

export const loader = (queryClient) =>
  async ({params})=>{
  const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
  // let response = await axios.get(${idUrl}${idQuery});
  // console.log(response);
  return { id };
}
const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
 
  // const singleDrink = data.drinks[0];
console.log(data);
  return (
    <Wrapper>
        <DetailedPage data= { data }/>
  </Wrapper>
  );
};

export default Cocktail;




// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007