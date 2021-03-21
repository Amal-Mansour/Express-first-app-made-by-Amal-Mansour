const hbs = require('hbs')
const express =require('express')
const path = require('path')

const app = express()

const auth = require('./auth')
app.use(auth)



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/views/partials'));
app.use(express.static(path.join(__dirname, 'views/public')));


// create Middleware Router between pages

app.get('/',(req,res)=>{
    res.render('Home')
});

app.get('/Services',(req,res) => {
    res.render('Services')
})

app.get('/Contact',(req,res)=>{
    res.render('Contacts')
})


// second step cerate a server to run the app 
const PORT = process.env.PORT || 7000
app.listen(PORT ,(err)=>{
    (err) ? console.error('Run Server is failed')
    :
    console.log(`Server is run on server ${PORT}`)
})