const express = require('express');
const app = express();

app.get("",(req,res)=>{

  res.sendFile('/home.html', {root: __dirname })
});


app.get("/contactUs",(req,res)=>{

  res.sendFile('/contactUs.html', {root: __dirname })
});


app.get("/about",(req,res)=>{

  res.sendFile('/about.html', {root: __dirname })
});


app.get("/blog",(req,res)=>{

  res.sendFile('/blog.html', {root: __dirname })
});


app.listen(3000,()=>{
  console.log("Server starting up at 3000:");
})
/*const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);*/