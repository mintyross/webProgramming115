const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('index', { activePage: "home" });
});

app.get('/posts', function(req, res){
    res.render('posts', { activePage: "posts" });
});

app.get('/login', function(req, res){
    res.render('login', { activePage: "login" });
});

app.get('/contact', function (req, res) {
    res.render('contact', { activePage: "contact" });
});

app.post('/contact', function (req, res) {
    res.render('contact_answer', { activePage: "contact", formData: req.body });
});

app.post('/posts/create', function (req, res) {
    res.render('create_post_success', { activePage: "create_post", postData: req.body });
});

app.post('/login', function (req, res) {
    res.render('admin', { activePage: "login", postData: req.body });
});

app.get('/posts/create', function (req, res) {
    res.render('create_post', { activePage: "create_post" });
});

app.use('/js', express.static(__dirname + '/public/js'));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
