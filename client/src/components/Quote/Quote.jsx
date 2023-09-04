// Time and Date
import React, {useState, useEffect} from "react";

import "./Quote.css"

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [sQuote, setSQuote] = useState("")

    // Fetch quote list
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setQuotes(data);
        }).catch(error => console.error(error));;
    }, [])
    useEffect(() => {
        // Set quote random initally
        setSQuote(quotes.length !== 0 ? quotes[Math.floor(Math.random()*quotes.length)].text : "Click me for a quote")
    },[])

    const onResetQuote = () => {
        // Get new quote every click
        setSQuote(quotes.length !== 0 ? quotes[Math.floor(Math.random()*quotes.length)].text : "")
    }
    

    return (
        <div onClick={onResetQuote} className="quote">
            <h2>Quotes</h2>
            <ul>
                <li key="QCs" className="quote-content">{sQuote}</li>
            </ul>
        </div>
    );
}

export default Quote;