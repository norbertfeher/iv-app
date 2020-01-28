import React, { useState, useEffect, useContext } from 'react'
import Movie from "./Movie";
import ApicallContext from "../context/ApicallContext";

//class HomePage extends React.Component {
const HomePage = () => {

    const [ movieList, setMovieList ] = useState(null);
    const apiCallContext = useContext(ApicallContext);

    function callApi()
    {
        apiCallContext.apiCall('upcoming');
    }

    useEffect( ()=>{
        setMovieList( apiCallContext.apiResults );
    }, [ apiCallContext.apiResults ] );

    useEffect( callApi, [] );

    return(
        <div className="container">
        <h1>Upcoming Movies</h1>
            { apiCallContext.lastType === 'upcoming'?
                <Movie videolist={movieList} />
                : null }
            </div>
    )

}

export  default HomePage;