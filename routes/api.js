const express = require("express");
const bus_util = require("../utils/bus_utils.js");

var app = express.Router();

app.get('/time', (req, res) => {
    res.json({'time': new Date()});
});

app.get('/bus', (req, res) => {
   res.json(bus_util.getBusNumbers()); 
});

app.get('/bus/:busno', (req, res) => {
    var busno = req.params.busno;
    var busdata = bus_util.readBusData(busno);
    res.json(busdata);
});

module.exports = app;
