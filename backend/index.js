const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const addPin = require('./Controllers/pin');
const connectDatabase = require('./Database');

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logger);

app.post('/createPin', addPin);

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Database Connected At PORT: 3001");
    })
}).catch((err) => {
    console.log("Error is", err);
})