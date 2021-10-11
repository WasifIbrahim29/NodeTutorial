const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app = express();
require('dotenv/config');

app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use('/posts',postsRoute)


//Routes
app.get('/', (req,res)=> {
    res.send("We are on home");
})


//Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, 
//     () => {console.log("Connected to DB")});


const uri = process.env.DB_CONNECTION;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }).
  then(() => console.log('Connected')).
  catch(err => console.log('Caught', err.stack));


app.listen(8080);





