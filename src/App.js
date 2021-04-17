import React, { useEffect } from "react";
import * as d3 from "d3-fetch";

const App = () => {
    // useEffect(() => {
    //     // create an async function
    //     const fetchData = async () => {
    //         let response = await fetch('https://raw.githubusercontent.com/info474-sp21/lecture-4-15-wk3-b-eda/main/weather.csv')
    //         let userJSON = await response.json();
    //         setUser(userJSON)
    //         setIsLoading(false)
    //     }
    //     // call async function to execute
    //     fetchData();
    // }, [])

    // useEffect(() => {
    //     // create an async function
    //     const fetchData = async () => {
    //         let response = await d3.csv('https://raw.githubusercontent.com/info474-sp21/lecture-4-15-wk3-b-eda/main/weather.csv')
    //         console.log(await response)
    //     }
    //     // call async function to execute
    //     fetchData();
    // }, [])

    d3.csv('https://raw.githubusercontent.com/info474-sp21/lecture-4-15-wk3-b-eda/main/weather.csv')
        .then((data) => {
            console.log(data)
        });

    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2</h1>
        </div>
    );
}

export default App;