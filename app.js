const express = require("express");
const PORT = process.env.PORT || 5000;
const logger = require("morgan");


var app = express();

app.use(logger("dev"));


app.get('/', (req, res) => { res.send("Hello world"); });

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
