import React from "react";

const SimpsonList = ({quote}) => {
    return (
        <div className="SimpsonList">
        <ul>
            <li>Quote : {quote.quote}</li>
            <li>Character : {quote.character}</li>
            <li>Image : <img src={quote.image} alt="pic" /></li>
            <li>CharacterDirection : {quote.left}</li>
        </ul>
        </div>
 )
};

export default SimpsonList;