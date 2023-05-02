const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefDetails = require('./data/chef.json')

app.get("/", (req, res)=>{
    res.send('chef server is running')
});

app.use(cors());

app.get('/chef', (req, res)=>{
    res.send(chefDetails)
})

app.listen(port, ()=>{
    console.log('Dragon api is runnign on port 5000');
})