"use strict";

const fs = require("fs");
const path = require("path");

module.exports = {
    getBusNumbers: function() {
        var data = {'buses': []};
        try {
            var dirPath = path.join(__dirname, '../data/bus');
            var fileList = fs.readdirSync(dirPath).filter(filename => filename.search('bus_') === 0).map(filename => filename.replace('bus_', '').replace('.json',''));
            console.log('get file list');
            console.log(fileList);
            data['buses'] = fileList; 
        } catch (ex) {
            console.log('exception when get list of buses' + ex);
        }
        return data;
    },
    readBusData: function(busNumber) {
        var busNoInt = parseInt(busNumber);
        if (isNaN(busNoInt)) return {};

        var filepath = path.join(__dirname, `../data/bus/bus_${busNoInt}.json`);
        try {
            var js = JSON.parse(fs.readFileSync(filepath, 'utf8'));
            if (js && (typeof(js) === 'string')) {
                js = JSON.parse(js);
            }
            return js;
        } catch (err) {
            console.log("error while loading file" + err);
        }
        return {};
    }
}
