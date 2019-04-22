let express = require('express');
let path = require('path');
let events = require('./eventsController');
let app = express();
let rootPath = path.normalize('__dirname__' + '/../');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8000);
console.log('Listening on port: 8000...');