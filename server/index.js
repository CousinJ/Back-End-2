// state cors and express variables 

const express = require('express');
const cors = require('cors');
//create app expression and invoke express
const app = express();
// now use middleware to invoke the app with express.json and cors.
app.use(express.json());
app.use(cors());

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')


app.get(`/api/houses`, getHouses)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)
app.delete(`/api/houses/:id`, deleteHouse)
//now use app.listen and state the port key.
app.listen(4004, () => {console.log('server is running on port 4004')})
