const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const weather = require('./weather');
const resource = require('./weather/resource');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/weather', weather.allData);
app.get('/weather/kota/:area', weather.dataKota);
app.get('/weather/provinsi/:area', weather.dataProvinsi);

exports.api = functions.region('us-central1').https.onRequest(
  app,
  resource.get().then(() => {
    const oneDayInMs = 86400000;
    setInterval(() => weather.get(), oneDayInMs);
  })
);
