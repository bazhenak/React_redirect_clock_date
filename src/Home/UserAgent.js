import React from "react";

function GetUserAgent() {


    return (
        <div>
            {/* Display the time string */}
            <h1>{window.navigator.userAgent}</h1>
        </div>
    );
};


export default GetUserAgent;
