import { baseAPI_url } from '../config/api.js';
import { fetchAPI, status, json } from '../utils/util.js';
import dummyData from './dummy_weather.json';

class WeatherData {
  static getAllData() {
    return dummyData;
  }

  static searchData(area, params = 'provinsi') {
    return fetchAPI(`${baseAPI_url}/${params}/${area}`)
      .then(status)
      .then(json)
      .catch(err => console.error(err));
  }
}

export default WeatherData;
