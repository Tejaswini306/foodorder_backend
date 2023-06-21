const express = require('express')
const app = express()
const port=5000;
const mongoDB=require('./db')
mongoDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://13.51.196.32:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())
app.use('/api/auth',require("./Routes/Author"));
app.get('/', (req, res) => {
  res.send('hello world')
})
if(process.env.NODE_ENV=='production'){
  app.use(express.static("Frontend/build"))
}

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
 


  /*global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })
  
  const express = require('express')
  const app = express()
  const port = 5000
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api/auth', require('./Routes/Author'));
  
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })*/
  
  




