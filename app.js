const express = require("express");
const PORT = process.env.PORT || 5000;


var app = express();


app.get('/', (req, res) => { res.send("Hello world"); });

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
