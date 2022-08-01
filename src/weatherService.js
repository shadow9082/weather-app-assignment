const API_KEY = "59ce96ec963f00f12035e48c30e32579";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  
    const long = data?.coord.lon
    const lat = data?.coord.lat

    console.log(long,lat)
  
  // for fetching hourly,weekly data
 /* const getFormattedWeatherData = async (lat,  = "metric") => {
  const URL_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${API_KEY}`

  const weatherUpdateData= await fetch(URL_2)
    .then((res2) => res2.json())
    .then((weatherUpdateData) => weatherUpdateData);

  console.log(weatherUpdateData)*/
  
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind: { speed },
    sys: { country },
    name,
  } = data;

  
 
 /* console.log(weatherUpdateData)
  console.log(weatherUpdateData?.current)*/

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };
