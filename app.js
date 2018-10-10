const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
//Set Public folder menjadi static folder utk file static
app.use(express.static('public'));
//Set middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res) => {
	res.render('index', {
		name: "Irvine Pramudya"
	});
});

app.get('/post',(req, res) => {
	res.render('form');
});

app.post('/post',(req, res) => {
	res.render('index', {
		name: req.body.textname
	});
});

app.listen(8000, () => {
	console.log('Server is running at port 8000');
});