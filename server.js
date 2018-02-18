var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | Nikhil Kamat',
    heading: 'Article One',
    date: 'Feb 18,2018',
    content:`
            <p>
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
            </p>
            <p>
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
            </p>
            <p>
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
                This is the content for my article. This is the content for my article. This is the content for my article.
            </p>` 
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
  
    var htmlTemplate= `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='\'>Home</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
