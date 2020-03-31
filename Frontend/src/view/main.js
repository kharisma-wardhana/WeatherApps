import '../components/weather_list.js';
import '../components/search-bar.js';
import WeatherData from '../data/weatherData.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const weatherListElement = document.querySelector('weather-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await WeatherData.searchData(searchElement.value);
      //   renderResult(result);
      console.log(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    weatherListElement.weathers = results;
  };

  const fallbackResult = message => {
    weatherListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
