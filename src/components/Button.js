import React from 'react';

const Button = ({location, addToFavorites}) => {


    if(location !== undefined){
        return (
            <div >
                <button onClick={() => addToFavorites(location)} className="btn btn-danger">Add to Favorites</button>
            </div>
        );
    }else{
        return null
    }
}

export default Button;
