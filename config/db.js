const mongoose = require('mongoose');

const dbURI = 
    "mongodb+srv://aria:1022@cluster0-efdax.mongodb.net/restapi?retryWrites=true";

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