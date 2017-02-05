var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageOne = {
    title:'pageOne',
    heading: 'Welcome to pageOne',
    date: '1st january',
    content:` 
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the first page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
};

var pageTwo = {
    title:'pageTwo',
    heading: 'Welcome to pageTwo',
    date: '2st january',
    content:` 
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the second page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
};

var pageThree = {
    title:'pageThree',
    heading: 'Welcome to pageThree',
    date: '1st january',
    content:` 
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>
         <p>This is the the third page of first website belonging to paras kumar, a first year computer sience btech student at IIT ROPAR</p>`
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1', function (req, res) {
 res.send(createTemplate(pageOne));
});

app.get('/page2', function (req, res) {
   res.send(createTemplate(pageTwo));
});

app.get('/page3', function (req, res) {
  res.send(createTemplate(pageThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});