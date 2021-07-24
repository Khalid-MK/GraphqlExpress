// To use babel on converting from es6 to es5 and use nodemon to dynamically change on server
// 1- $ npm install -D babel-cli babel-core babel-preset-env nodemon
// 2- Create new file .babelrc and add next lines to it
/* 
    // .babelrc
    {
    "presets": ["env"]
    }
*/
// 3- on package.json  add to scripts next line
/*
    "start": "nodemon index.js --exec babel-node -e js",
*/
// 4- now to you ready to start your server using $ npm run start

import express from 'express'

const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// Steps of creating graphql server
// 1- Schema
//      a- Create Schema.js file
// 2- Resolver
// 3- Configurations

app.get('/', (req, res) => {
    res.send('Welcome to Graphql Server')
})

