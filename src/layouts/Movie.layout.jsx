import React from 'react';

// Components
import Navbar from "../components/Navbar/Navbar.component";

const MovieLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
};

export default MovieLayout;