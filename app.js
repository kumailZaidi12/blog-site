const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const app = express()
//Load config
dotenv.config({path: './config/config.env' })

// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')
  

connectDB()

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT,
  console.log(`Server running on port ${PORT}`)
)