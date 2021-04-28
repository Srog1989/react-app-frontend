import React from 'react'
import {connect} from 'react-redux'
// import Form from '../components/Form'

const Weather = ({ location, temp_farenheit, temp_max, temp_min, description, icon, error}) => {

    return(
        <div className="container text-info">
            <div className="cards pt-4">
                <h1>{location}</h1>
                <h5 className="py-4">
                    <i className={`wi ${icon} display-1`}/> 
                </h5>
                {temp_farenheit ? (
                    <h1 className="py-2">{temp_farenheit}&deg;</h1>
                ):null}
                {minmaxTemp(temp_min,temp_max)}
                <h4 className="py-3">{description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min,max){
    if(min&&max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
        )
    }
}

const mapStateToProps = ({ location, temp_farenheit, temp_max, temp_min, description, icon, error}) => ({ location, temp_farenheit, temp_max, temp_min, description, icon, error})

export default connect (mapStateToProps)(Weather)