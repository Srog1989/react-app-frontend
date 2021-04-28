import React from 'react';
import { connect } from 'react-redux'
import { addFavorite } from './Actions/addFavorite'
const Button = ({location, addFavorite}) => {
let favorite = {location}

    if(location !== undefined){
        return (
            <div >
                <button onClick={() => addFavorite(favorite)} className="btn btn-warning">Add to Favorites</button>
            </div>
        );
    }else{
        return null
    }
}

export default connect(null,{addFavorite})(Button);
