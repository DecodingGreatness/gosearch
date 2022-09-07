import React, { createContext, useContext, useState } from "React";

const ResultContext = createContext();
const baseURL = "https://google-search1.p.rapidapi.com/google-search";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {},
    });
  };
};
