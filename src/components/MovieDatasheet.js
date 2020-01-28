import React, {  useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApicallContext from "../context/ApicallContext";

const MovieDatasheet = () => {

    const [ movieData, setMovieData ] = useState(null);
    const apiCallContext = useContext(ApicallContext);
    const urlParams  = useParams();

    useEffect( ()=> {
        const id = urlParams.id;
         apiCallContext.apiCall('movieDatasheet', [id] );
    } );

    useEffect( ()=>{
        setMovieData( apiCallContext.apiResults );
    }, [ apiCallContext.apiResults ] );

    const listElement = (element, key) => {
        return (
            <span className="movieDatasheet__list-span" key={key}>{element.name}</span>
        )
    }


        return (
            <div className="container movieDatasheet">

                { movieData !== null && typeof movieData.title !== 'undefined' ?
                    <div className="card">
                        <img src={'https://image.tmdb.org/t/p/w500'+movieData.poster_path } className="card-img-top movieDatasheet__image" alt={movieData.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movieData.title}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Original title: {movieData.original_title}</li>
                                <li className="list-group-item">Homepage: <a href={movieData.homepage} target="_blank">{movieData.homepage}</a> </li>
                                <li className="list-group-item">Genres: {movieData.genres.map( function (element, key) {
                                    return (
                                        listElement( element, key )
                                    )
                                } ) }</li>
                                <li className="list-group-item">Overview: {movieData.overview}</li>
                                <li className="list-group-item">Release date: {movieData.release_date}</li>
                                <li className="list-group-item">Runtime: {movieData.runtime} min</li>
                                <li className="list-group-item">Status: {movieData.status}</li>
                                <li className="list-group-item">Original language: {movieData.original_language}</li>
                                <li className="list-group-item">Production Companies: <ul> {movieData.production_companies.map( function (element, key) {
                                    return (
                                        <li className="movieDatasheet__list-companies" key={key}>{element.name}
                                            { element.logo_path !== null ? <img className="movieDatasheet__list-companies__image" src={'https://image.tmdb.org/t/p/w500'+element.logo_path } alt={element.name} /> : null  }
                                        </li>
                                    )
                                } ) }
                                </ul>
                                </li>
                                <li className="list-group-item">Productional Countries: {movieData.production_countries.map( function (element, key) {
                                    return (
                                       listElement( element, key )
                                    )
                                } ) }</li>
                            </ul>
                        </div>
                    </div>
                    : null }
                <p>

                </p>


            </div>
        );
}

export default MovieDatasheet;