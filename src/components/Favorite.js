import React from 'react';
import {Link} from 'react-router-dom'

const Favorite = (props) => {


    return (
        <div className="container">
            <div className="card d-flex">
                <button onClick={()=> props.getWeather(props.location)}>
                    <Link to='/favorite-weather'>{props.location}</Link>
                </button>
            </div>
        </div>
        
    );
}



export default Favorite;

