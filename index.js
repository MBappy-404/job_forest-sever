const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express()
 


//middle ware
app.use(cors());
app.use(express.json());

const allJobs = require('./Data/Jobs.json');



app.get('/', async(req,res) =>{
     res.send('job forest server is running')
})



app.get('/allJobs', (req,res)=>{
     res.send(allJobs)
})


app.listen(port, () => console.log(`job forest Running on ${port} `))