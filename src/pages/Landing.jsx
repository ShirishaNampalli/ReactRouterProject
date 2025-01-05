import axios from "axios";
import React from "react";
import {  useLoaderData } from "react-router";
import CocktailList from "./CocktailList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

console.log(cocktailSearchUrl)


const searchCocktailQuery =  (searchTerm)=>{
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async()=>{
         searchTerm = searchTerm || "Margarita";
         const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  }

}


export const loader = (QueryClient) =>
async ({request})=>{
  
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || "Margarita";
  
  // const response = await axios.get(`${cocktailSearchUrl}${searchQuery}`);
 
   return { searchTerm };
};


const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  return (
    <>
      <SearchForm/>
      <CocktailList drinks={ drinks } />
    </>
  );
};

export default Landing;
