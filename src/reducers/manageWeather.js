
export default function manageWeather(state =  {
    favorites: [],
    location: undefined,
    icon: null,
    main: undefined,
    farenheit: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false
}, action)  {
  switch (action.type) {
    
    case 'SET_WEATHER':
      return { ...state,   
        location: action.weather.location,
        icon: action.weather.icon,
        main: action.weather.main,
        farenheit: action.weather.farenheit,
        temp_max: action.weather.temp_max,
        temp_min: action.weather.temp_min,
        description: action.weather.description,
        error: false
    }
    case 'GET_WEATHER_ICON':
            if(action.rangeId >= 200&&action.rangeId <= 232){
                return {...state, icon: action.weatherIcon.Thunderstorm}
            }
            else if (action.rangeId >= 300&&action.rangeId <= 321){
                return {...state,icon:action.weatherIcon.Drizzle}
            }
            else if(action.rangeId >= 500&&action.rangeId <= 531){
                return {...state, icon:action.weatherIcon.Rain}
            }
            else if(action.rangeId >= 600&&action.rangeId <= 622){
                return {...state, icon:action.weatherIcon.Snow}
            }
            else if(action.rangeId >= 701&&action.rangeId <= 781){
                return {...state, icon:action.weatherIcon.Atmosphere}
            }
            else if(action.rangeId >= 800&&action.rangeId <= 622){
                return {...state, icon:action.weatherIcon.Snow}
            }
            else if(action.rangeId === 800){
            return {...state, icon: action.weatherIcon.Clear}
            }
            else if(action.rangeId >= 801&&action.rangeId <= 804){
                return {...state, icon:action.weatherIcon.Clouds}
            }
            else {return {...state, icon:action.weatherIcon.Clouds}
          }

          case 'ADD_TO_FAVORITES':
              console.log(action.payload.location)
              return{favorites:  [...state.favorites, action.payload.location]}
      
    default:
      return state;
  }
};