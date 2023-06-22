// this app will require the use of express.js
const express = require('express');
// the routes that are linked in this app must be properly directed through the use of / and .
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

//the middleware is used to pare the URL-encoded data that is submitted through the HTML. 
// the URL-encoded data should be parsed using the query string library. 
app.use(express.urlencoded({ extended: false }));
//this middleware is used to parse the JSON data that is sent into the request body
app.use(express.json());
//This middleweare serves static files from the 'public' directory, and any files can be accessed through their URL
app.use(express.static('public'));
//The apiRoutes is accessible under the /api path
app.use((req, res, next) => {
  console.log(`Incoming request to ${req.method} ${req.originalUrl}`);
  next();
});
app.use('/api', apiRoutes);
//This htmlRoutes will be accessible at the roote path
app.use('/', htmlRoutes);


//The port number will listen for the incoming requests. 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

