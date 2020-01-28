import React from 'react';
import {Link} from 'react-router-dom';

const Movie = (videoList) => {

    if( videoList.videolist == null )
        return null;
    
    const vl = videoList.videolist.results;
    if( typeof vl == 'undefined')
        return  null;

    return(
        <div className="container">
            {vl.map(video => (
            <div className="row" key={video.id}>
                <div className="card col-12">
                    <div className="card-body btn">
                        <Link to={'/video/' + video.id}  > {video.title} </Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}

export default Movie