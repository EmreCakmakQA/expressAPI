const express = require('express');
const path = require('path');
//const logger = require('./middleware/logger')

const app = express();


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// Set a static folder - serves the HTML, CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', (require('./routes/api/members')))


// Setting up the port the server is running on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));