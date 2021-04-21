import React from 'react';
import Weather from './components/Weather'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"

const API_key="4215bb13a08c02af64771aeabee5aba7"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      farenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    }
    this.getWeather()

    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }

  calFarenheit(temp){
    let faren=Math.floor(((temp - 273.15) * 1.8) + 32)
    return faren
  }


  getweatherIcon(icons,rangeId){
    switch(true){
      case rangeId >= 200&&rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm})
        break;
      case rangeId >= 300&&rangeId <= 321:
        this.setState({icon:this.weatherIcon.Drizzle})
        break;
      case rangeId >= 500&&rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain})
        break;
      case rangeId >= 600&&rangeId <= 622:
       this.setState({icon:this.weatherIcon.Snow})
       break;
      case rangeId >= 701&&rangeId <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere})
        break;
      case rangeId >= 800&&rangeId <= 622:
        this.setState({icon:this.weatherIcon.Snow})
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear})
        break;
      case rangeId >= 801&&rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds})
        break;
        default:
          this.setState({icon:this.weatherIcon.Clouds})


    }
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`)

    const response = await api_call.json()
    console.log(response)
    this.setState({
      city: response.name,
      country: response.sys.country,
      farenheit: this.calFarenheit(response.main.temp),
      temp_min: this.calFarenheit(response.main.temp_min),
      temp_max: this.calFarenheit(response.main.temp_max),
      description: response.weather[0].description, 
    })
    this.getweatherIcon(this.weatherIcon, response.weather[0].id)
  }

  render() {
    return (
      <div className="App">
       <Weather 
        city={this.state.city}
        country={this.state.country} 
        temp_farenheit={this.state.farenheit}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    );

  }
}

export default App;
