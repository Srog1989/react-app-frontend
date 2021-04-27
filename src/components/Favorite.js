import React from 'react';
import {Link} from 'react-router-dom'


const Favorite = (props) => {


    return (
        <div>
            <button onClick={()=> props.getWeather(props.location)}>
                <Link to='/favorite-weather'>{props.location}</Link>
            </button>
        </div>
    );
}

export default Favorite;
