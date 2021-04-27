import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form'
import WeatherInfo from '../components/WeatherInfo'
import "weather-icons/css/weather-icons.css"
import Button from '../components/Button'

let weatherIcon={
    Thunderstorm:"wi-thunderstorm",
    Drizzle:"wi-sleet",
    Rain:"wi-storm-showers",
    Snow:"wi-snow",
    Atmosphere:"wi-fog",
    Clear:"wi-day-sunny",
    Clouds:"wi-day-fog"
  }


const API_key="4215bb13a08c02af64771aeabee5aba7"

class WeatherContainer extends Component {

    calFarenheit(temp){
        let faren=Math.floor(((temp - 273.15) * 1.8) + 32)
        return faren
      }

    getWeather = async(e) => {
        e.preventDefault()
          const city = e.target.elements.city.value;
          const country = e.target.elements.country.value;
        if(city && country){
          const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country},&appid=${API_key}`
            );
            const response = await api_call.json()
            console.log(response)
            const weather = {
                location: `${response.name},${response.sys.country}`,
                farenheit: this.calFarenheit(response.main.temp),
                temp_min: this.calFarenheit(response.main.temp_min),
                temp_max: this.calFarenheit(response.main.temp_max),
                description: response.weather[0].description 
            };
            this.props.setWeather(weather);
            this.props.getWeatherIcon(weatherIcon, response.weather[0].id);
        }else{
            this.setState({error: true})
        }
    }

    render() {
        return (
            <div className=".bg-img">
                <Form loadweather={this.getWeather} error={this.props.error}/>
                <WeatherInfo
                    // location={this.props.location}
                    // temp_farenheit={this.props.farenheit}
                    // temp_max={this.props.temp_max}
                    // temp_min={this.props.temp_min}
                    // description={this.props.description}
                    // weatherIcon={this.props.icon}
                /> 
                <Button location={this.props.location} addToFavorites={this.props.addToFavorites}/>
            </div>
        );
    }
}
const mapStateToProps = ({ location, temp_farenheit, temp_max, temp_min, description, icon, error}) => ({ location, temp_farenheit, temp_max, temp_min, description, icon, error})

const mapDispatchToProps = dispatch => ({
    setWeather: weather => dispatch({type: "SET_WEATHER", weather }),
    getWeatherIcon: (weatherIcon, rangeId) => dispatch({type: "GET_WEATHER_ICON", weatherIcon, rangeId }),
    addToFavorites: favorite => dispatch({type: "ADD_TO_FAVORITES", favorite})
})


export default connect(mapStateToProps, mapDispatchToProps) (WeatherContainer);

