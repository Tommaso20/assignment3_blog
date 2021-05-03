const express = require ('express')
const mongoose = require ('mongoose')
const blogRouter = require('./routes/blogs')
const app = express()

//database connection
mongoose.connect('mongodb://localhost/blog_db', { useNewUrlParser: true , useUnifiedTopology: true })

app.set('view engine', 'ejs')
 // Setting ejs as view engine

app.use('/blogs', blogRouter)
 // so every route we create is going to be added in /blogs

app.use(express.urlencoded({extended: false}))
// access the form data inside of the route by just
// typing req.body

// creating route
app.get('/', (req, res) => {
    const blogs = [{
        title: 'First Blog',
        creationDate: new Date(),
        description: 'First Description'
    }]
    // creating array of blogs
    res.render('blogs/index', {blogs: blogs}) // showing index.ejs
})

app.listen(80)

