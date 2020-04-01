import '../components/weather-list/index.js';
import '../components/search-bar/index.js';
import '../components/loading-bar/index.js';
import WeatherData from '../data/weatherData.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const weatherListElement = document.querySelector('weather-list');

  const onButtonSearchClicked = async () => {
    try {
      if (searchElement.value === undefined || searchElement.value === null || searchElement.value === '') {
        return fallbackResult('Silahkan masukkan nama provinsi');
      }
      const result = await WeatherData.searchData(searchElement.value);
      // console.log(result);
      renderResult(result);
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
