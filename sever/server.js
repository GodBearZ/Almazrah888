const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser');

const connectDB = require('./Config/db');
const port = 5001;
const { readdirSync } = require('fs');
//const schedulerRouter = require('./Routes/Scheduler')
const app=express();
connectDB()
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json());

//Route 1
//app.get('/test',(req,res) => {
//    res.send('Hi Man')
//})

//Route 2
//app.use('/insys',schedulerRouter);

//Route 3
readdirSync('./Routes').map((r) => 
    app.use('/',require('./Routes/' + r))
);

app.listen(port, () => 
    console.log(`Server running on PORT ${port}`)
);