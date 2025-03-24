import React, { createContext, useState, useEffect } from "react";
import { Movienight } from "../data/Movienight";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isFirstEffectDone, setIsFirstEffectDone] = useState(false);
  const [isFirstMounting, setIsFirstMounting] = useState(true);

  useEffect(() => {
    if (isFirstMounting) {
      localStorage.setItem("movies", JSON.stringify(Movienight));
      setIsFirstMounting(false);
      setIsFirstEffectDone(true);
      return;
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    setIsFirstEffectDone(true);
  }, [movies]);

  useEffect(() => {
    if (isFirstEffectDone) {
      const storedMovies = localStorage.getItem("movies");
      const parsedMovies = JSON.parse(storedMovies);

      if (parsedMovies.length === 0) {
        setMovies([]);
        return;
      }
      setMovies(parsedMovies);
    }
  }, [isFirstEffectDone]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
