export const getFavorites = () => {
    console.log("hello")
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/favorites', {

        })
        .then(resp => resp.json())
        // .then(fav => console.log(fav))
        // .then(favorites => dispatch({type: "SET_FAVORITES", payload:favorites}))
        .then(locations => dispatch({type: "SET_FAVORITES", payload:locations}))
        
    }
}