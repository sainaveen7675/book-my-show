import React from "react";

export const NextArrow = (props) => {
    // const {className, style, onClick} = props; --> props contains all these things by default 
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </>
    );
};