const fs = require('fs');

const dataKota = async (req, res, next) => {
  const rawcity = req.params.area;

  let city;
  if (rawcity) {
    city = rawcity
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  } else {
    res.send('parameter kota tidak boleh kosong');
  }

  fs.readFile('cache/weather.json', (err, data) => {
    let weather = JSON.parse(data.toString());
    let weatherData = weather.filter(element => element.kota.includes(city));

    if (weatherData.length > 0) {
      res.send(weatherData[0]);
    } else {
      res.send('kota tidak ditemukan');
    }
  });
};

const dataProvinsi = async (req, res, next) => {
  const rawProvince = req.params.area;

  let province;
  if (rawProvince) {
    province = rawProvince
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  } else {
    res.send('parameter kota tidak boleh kosong');
  }

  fs.readFile('cache/weather.json', (err, data) => {
    let weather = JSON.parse(data.toString());
    let weatherData = weather.filter(element => element.provinsi.includes(province));

    if (weatherData.length > 0) {
      res.send(weatherData);
    } else {
      res.send('data tidak ditemukan');
    }
  });
};

const allData = async (req, res, next) => {
  fs.readFile('cache/weather.json', (err, data) => {
    let weather = JSON.parse(data.toString());
    let weatherData = weather;

    if (weatherData.length > 0) {
      res.send(weatherData);
    } else {
      res.send('data tidak ditemukan');
    }
  });
};
module.exports = { dataKota, dataProvinsi, allData };
