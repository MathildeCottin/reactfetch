import React from "react";

const Button = ({selectQuote}) => {
   
        return (
            <div  className="GenerateQuote">
            <button  onClick={selectQuote}>Get quote</button>
            </div>
        );

};

export default Button;