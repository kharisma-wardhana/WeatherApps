import { baseAPI_url } from '../config/api.js';
import { fetchAPI, status, json } from '../utils/util.js';

class WeatherData {
  static getAllData() {
    return fetchAPI(`${baseAPI_url}`)
      .then(status)
      .then(json)
      .catch(err => console.error(err));
  }

  static searchData(area, params = 'provinsi') {
    return fetchAPI(`${baseAPI_url}/${params}/${area}`)
      .then(status)
      .then(json)
      .catch(err => console.error(err));
  }
}

export default WeatherData;
