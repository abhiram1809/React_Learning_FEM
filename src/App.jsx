import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Adopt Me!"),
//    React.createElement(Pet, {
//      name: "Luna",
//      animal: "Dog",
//      breed: "Havanese",
//    }),
//    React.createElement(Pet, {
//      name: "Pepper",
//      animal: "Bird",
//      breed: "Cockatiel",
//    }),
//    React.createElement(Pet, {
//     name: "Doink",
//     animal: "Cat",
//       breed: "Mix",
//    }),
//  ]);
//};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
