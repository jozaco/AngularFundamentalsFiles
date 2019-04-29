let express = require('express');
let path = require('path');
let events = require('./eventsController');
let app = express();
let rootPath = path.normalize(__dirname + '/../');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);

app.get('*', function (req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(8000);
console.log('Listening on port: 8000...');