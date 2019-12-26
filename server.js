//requiring dependencies
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
//requiring routes
const dietRoutes = require('./routes/dietplanner');
const receipeRoutes = require('./routes/receipe');
//bodyparser middlewares
app.use(bodyparser.json());
app.use(cors());
//using diet routes
app.use('/diet', dietRoutes);
app.use('/receipe', receipeRoutes);
//configuring database

//api end points
//adds new receipe in database

//listening on port 3000
app.listen(process.env.PORT || 3000, () =>
  console.log(`server started listening at port 3000`)
);
