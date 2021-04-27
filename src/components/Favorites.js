import React, { Component } from 'react';
import { connect } from 'react-redux'
import Favorite from '../components/Favorite'

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
class Favorites extends Component {

     locations = () => {
        if(this.props.favorites !== undefined ){
            return this.props.favorites.map(favorite => <Favorite location={favorite}  key={favorite} getWeather={this.getWeather}/>)
        }
    }
    calFarenheit(temp){
        let faren=Math.floor(((temp - 273.15) * 1.8) + 32)
        return faren
      }

    getWeather = async(location) => {
        if(location){
          const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location},&appid=${API_key}`
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
        }
    }


    render() {

        return (
            <div>
               {this.locations()}
            </div>
        );
    }
}

const mapStateToProps = ({favorites}) => ({favorites});

const mapDispatchToProps = dispatch => ({
    setWeather: weather => dispatch({type: "SET_WEATHER", weather }),
    getWeatherIcon: (weatherIcon, rangeId) => dispatch({type: "GET_WEATHER_ICON", weatherIcon, rangeId })
})


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

