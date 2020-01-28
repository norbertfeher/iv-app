import React, {  useEffect, useContext, useState } from 'react'
import ApicallContext from "../context/ApicallContext";
import Movie from "./Movie";

const SearchPage = () => {

    const [ keyword, setKeyword ] = useState([]);
    const [ movieList, setMovieList ] = useState(null);
    const apiCallContext = useContext(ApicallContext);

    useEffect( function () {
        if( keyword.length<3 ) {
            return;
        }
        apiCallContext.apiCall('search', [keyword] );

    }, [ keyword ] );

    useEffect( ()=>{
        setMovieList( apiCallContext.apiResults );
    }, [ apiCallContext.apiResults ] );

    return (
        <div className="container searchPage">
            <h1>Search</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Keyword</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onKeyUp={ function (event) {
                    setKeyword( event.target.value );
                } } />
            </div>
            { apiCallContext.lastType === 'search'?
            <Movie videolist={movieList} />
            : null }
        </div>
    );
}

export default SearchPage;