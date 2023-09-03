// Time and Date
import React, {useState, useEffect} from "react";

import "./Quote.css"

const Quote = () => {
    const quotes = ["Someone in your life needs to hear that they matter. That they are loved. That they have a future. Be the one to tell them.", "Friend."]

    return (
        <div className="quote">
            <h2>Quotes</h2>
            <li>
                {quotes.map(quote => {
                    return <ul className="quote-content">{quote}</ul>
                })}
            </li>
        </div>
    );
}

export default Quote;