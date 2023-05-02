const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chef = require('./data/chef.json')
const chefDetails = require('./data/details.json')

app.get("/", (req, res)=>{
    res.send('chef server is running')
});

app.use(cors());

app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/details', (req, res)=>{
    res.send(chefDetails)
})

app.get('/details/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedChef= chefDetails.find(c=> c._id===id);
    res.send(selectedChef)
})

app.listen(port, ()=>{
    console.log('Dragon api is runnign on port 5000');
})