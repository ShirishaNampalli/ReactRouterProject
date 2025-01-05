import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Landing,
  HomeLayout,
  Cocktail,
  Error,
  NewsLetter,
  SingleErrorPage,

} from "./pages/index";
import {loader as landingLoader} from "./pages/Landing";
import {loader as cocktailLoader} from './pages/Cocktail';
import {action as newsLetterAction} from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
  defaultOptions : {
    queries: {
      staleTime : 1000 * 60 * 5,
    },
  },
 });

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,  //Error Boundary
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleErrorPage/>,
        loader:landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SingleErrorPage/>,
        loader: cocktailLoader(queryClient), 
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsLetterAction,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "cocktail/:id",
      //   element: <Cocktail />,
      // },
    ],
  },
]);




const App = () => {
  return(
    <>
       <QueryClientProvider client = {queryClient} >
           <RouterProvider router={router} />;
           <ReactQueryDevtools initialIsOpen = {true}/> 
       </QueryClientProvider>
       
       
  </>
)
};

export default App;
