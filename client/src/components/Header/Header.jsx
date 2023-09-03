// Time and Date
import React from "react";

import "./Header.css"

const Header = () => {
    function getCurrentDate(){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}年${month}月${date}日`
    }
    return (
        <div className="header">
            <h1>Dashboard</h1>
            <h2 className="Date">{getCurrentDate()}</h2>
        </div>
    );
}

export default Header;