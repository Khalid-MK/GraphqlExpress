const express = require('express')
const path = require('path')
const membersRouter = require('./routes/api/members')
const logger = require('./middleware/logger/logger')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

// Add middleware for log data about request
// app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API router
app.use('/api/members', membersRouter)

