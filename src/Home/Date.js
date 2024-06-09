import React, { useState, useEffect } from 'react'

function GetDate() {
    // Initialize the current time to the current date and time
    const [time, setTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Extract the hours, minutes, and seconds from the current time
    const date = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();


    // Format the time as a string
    const timeString = `${date}.${month}.${year}`;

    return (
        <div>
            {/* Display the time string */}
            <h1>{timeString}</h1>
        </div>
    );
};


export default GetDate;
