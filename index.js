
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
console.log(`server listening on port ${port}`);

const bodyParser = require('body-parser');
console.log(`server listening on port ${port}`);
const { acceptsLanguages } = require('express/lib/request');
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'))


app.get('/', function(request, response) {
    response.render('index');
});

app.post('/index', urlEncodedParser, function(request, response) {
  
});


app.listen(port);
console.log('server is listening on port ' + port)