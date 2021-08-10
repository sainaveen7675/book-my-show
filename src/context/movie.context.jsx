import React, { useState } from "react";

export const MovieContext = React.createContext(); // creating the context

const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
    }); // this data will be currently assigned as empty. when ever the data avilable this data will be replaced with that...

    return (
        <MovieContext.Provider value={{ movie, setMovie }}> 
            {children}
        </MovieContext.Provider>  // giving the user flexibility to read (movie) or update (setMovie) the data 
                                  // this changes will be applied to the child element of the "MovieProvider" tag where ever we use it
    );
};

export default MovieProvider; // this is imported in the "index.jsx" file....