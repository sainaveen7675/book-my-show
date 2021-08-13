import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

// Components
import MovieNavbar from '../components/Navbar/movieNavbar.component';

// context
import { MovieContext } from '../context/movie.context';

const MovieLayout = (props) => {
    const { id } = useParams(); // useParams -> Hook, it will get the id from the URL
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data); // axios always use ".data" to access the process data. If we using axios, we need to use ".data everywhere"
        }
        requestMovie();
    }, [id]);

    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    )
};

export default MovieLayout;