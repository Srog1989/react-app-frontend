export const getWeatherIcon = (rangeId) => {
    let weatherIcon={
        Thunderstorm:"wi-thunderstorm",
        Drizzle:"wi-sleet",
        Rain:"wi-storm-showers",
        Snow:"wi-snow",
        Atmosphere:"wi-fog",
        Clear:"wi-day-sunny",
        Clouds:"wi-day-fog"
      }
    
    return { type: "GET_WEATHER_ICON", weatherIcon, rangeId}
}