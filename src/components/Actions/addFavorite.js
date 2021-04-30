export const addFavorite = (favorite) => {
    console.log("hello")
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/favorites', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(favorite)
        })
        .then(resp => resp.json())
        .then(location => dispatch({type: "ADD_TO_FAVORITES", payload:location}))
    }
}