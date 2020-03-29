const express = require("express");
const PORT = process.env.PORT || 5000;
const logger = require("morgan");
const path = require("path");


var app = express();

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
