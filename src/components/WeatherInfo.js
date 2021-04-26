import React from 'react'

const Weather = (props) => {

    const setBackground = () =>{
        let body = document.querySelector("#body")

        if(props.weatherIcon === "wi-day-fog"){
            body.setAttribute("class", "bg-day-fog")
        }else if(props.weatherIcon === "wi-thunderstorm"){
            body.setAttribute("class", "bg-thunderstorm")
        }else if(props.weatherIcon === "wi-sleet"){
            body.setAttribute("class", "bg-sleet")
        }else if(props.weatherIcon === "wi-storm-showers"){
            body.setAttribute("class", "bg-storm-showers")
        }else if(props.weatherIcon === "wi-snow"){
            body.setAttribute("class", "bg-snow")
        }else if(props.weatherIcon === "wi-day-sunny"){
            body.setAttribute("class", "bg-sunny")
        }else if(props.weatherIcon === "wi-fog"){
            body.setAttribute("class", "bg-fog")
        }
    }

    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.location}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}/> 
                </h5>
                {props.temp_farenheit ? (
                    <h1 className="py-2">{props.temp_farenheit}&deg;</h1>
                ):null}
                {minmaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
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

export default Weather