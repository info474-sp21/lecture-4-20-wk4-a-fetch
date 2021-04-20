import React, { useEffect } from "react";
import * as d3 from "d3-fetch";
import {useFetch} from "./hooks/useFetch";

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

    // d3.csv('https://raw.githubusercontent.com/info474-sp21/lecture-4-15-wk3-b-eda/main/data/fatal-police-shootings-data.csv')
    // .then((data) => {
    //     console.log(data)
    // });


    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/info474-sp21/lecture-4-15-wk3-b-eda/main/data/fatal-police-shootings-data.csv"
      );



    console.log("from hook", loading, data);
    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2</h1>
            {/* if loading is true, show 'Loading data!' */}
            <p>{loading && "Loading data!"}</p>
        </div>
    );
}

export default App;