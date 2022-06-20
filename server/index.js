// server/index.js
const path = require('path');
const express = require("express");
const cors = require('cors');
const fs = require('fs');
const authData = require("./auth.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: '*'
}));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// User authentication
app.get("/user-auth", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    let userId = -1;
    for (let i = 0; i < authData.length; i++) {
      if(authData[i].username === username && authData[i].password === password) {
        userId = authData[i].userId;
        break;
      }
    }
    res.status(200).send({userId: userId});
}) 

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});