const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
// var morgan = require('morgan')
const cors = require('cors')
const Numberss = require('./model/number')

require('dotenv').config()

const app = express();



mongoose.connect(process.env.DB_NAME, {useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true });
//make use of nodejs promise insted of mongoose
mongoose.Promise = global.Promise

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// app.use(morgan('dev'))
app.use(cors())

app.post("/name", function(req, res){
    let nu = new Numberss({num:{
        name:req.body.name,
        value:req.body.value,
    }
    });
    nu.save()
    .then(car=>{
        res.status(201).json({
            mess: 'number succesfully created',
            response:{
                type:'POST'
            }
        })
    })
    .catch(err=>{
         return res.status(500).send(err)
    })
    console.log("Post Received: %s %s %s", req.body.name);
 });

app.get('/name', async function (req, res) {
    let datas= await Numberss.find({})
    res.send(datas)
  })

app.listen(process.env.PORT);