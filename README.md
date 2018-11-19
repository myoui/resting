# resting - A RESTful API example

## Using:
[express](https://www.npmjs.com/package/express), a web app framework.

[MongoDB](https://www.mongodb.com/), a noSQL database.

[mongoose](https://www.npmjs.com/package/mongoose), a mongoDB modeling tool.

[nodemon](https://www.npmjs.com/package/nodemon) (Not installed), a node application monitor.

## Usage
Start the API with `node app.js <port (optional, default 3001)>`. If you have `nodemon` installed you can simply run `npm start` to start and monitor the API. Access the API from `http://localhost:<port>/<endpoint>` with your prefered REST client/application.

## Not included
`./config/db.js` is REQUIRED but not included as it connects to a specific mongoDB server. A template is provided below.

```javascript
// db.js

const mongoose = require('mongoose');

const dbURI = 
    "<YOUR MONGODB URL HERE>";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true,
}

mongoose.connect(dbURI, options).then(
    () => {
        console.log('Connected to mongoDB.')
    },
    err => {
        console.log("Error: ", err)
    }
)
```

## API Endpoints and DB schemas
Please see `app.js` for endpoint examples. Correlating controllers and database schemas can be found in `/controllers` and `/models` respectively. Some working endpoints are:

GET, POST on `hosturl/tasks`

GET, DELETE on `hosturl/tasks/:taskid`

GET, POST, DELETE(**READ**:ALL ITEMS) on `hosturl/schedules`

GET, DELETE on `hosturl/schedules/:date`; GET ON `hosturl/schedules/archive/:year/:month`

## Authorization via header authorization
A simple authentication function is provided via an `express` middleware at `app.py/authenticate`. It is functional but not very secure by any means and cannot generate new keys. (keys have to be hardcoded) It is active on `POST: hosturl/schedules`
