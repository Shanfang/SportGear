var express = require('express');
// import express from 'express';
// import routes from './routes/shoesRoutes';
var routes = require('./routes/shoesRoute');
var routes = require('./routes/shortsRoute');
const app = express();
const PORT = 3000;

// routes(app);
app.get('/', (req, res) => 
    res.send(`Thanks for visiting the soprt gear store!`)
);

app.use('/', routes);

app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`)
);