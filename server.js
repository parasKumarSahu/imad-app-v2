var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
user: 'paraskumarsahu',
Password: process.env.DB_PASSWORD,
database: 'paraskumarsahu',
host: 'ssh.imad.hasura-app.io',
port: '5432'
};

var app = express();
app.use(morgan('combined'));

var pages = {
  pageOne: {
    title: 'pageOne',
    heading: 'Welcome to pageOne',
    date: '1st january',
    content:`
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
    },
  pageTwo: {
    title:'pageTwo',
    heading: 'Welcome to pageTwo',
    date: '2st january',
    content:` 
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
    },
  pageThree: {
    title:'pageThree',
    heading: 'Welcome to pageThree',
    date: '1st january',
    content:` 
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
    }
 };

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
 <html>
   <head>
      <title>
         ${title}
      </title>
      <link href="/ui/style.css" rel="stylesheet" />
   </head>
   <body>
      <div>
         ${date}
      </div>
      <div class="center text-big bold"> 
         <h1>${heading}</h1>
      </div>
      <div class="center bold">
         <a href="/">HOME</a>
      </div>
      <div class="center">
         ${content}
      </div>
   </body>
 </html>`
 return htmlTemplate;
}

var counter=0;

app.get('/counter', function (req, res) {
  counter=counter+1;    
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Pool = new Pool(config);
app.get('/test-db' , function(res, req) {
   Pool.query('SELECT * FROM user' , function(err, result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           res.send(JSON.stringify(result));
       }
   }); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get( '/:pageName' , function (req, res) {
 var pageName = req.params.pageName;   
 res.send(createTemplate(pages[pageName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});