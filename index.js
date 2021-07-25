/*

0- $ npm init -y

1- $ npm install express graphql express-graphql nanoid
    To use babel on converting from es6 to es5 
    and use nodemon to dynamically change on server

2- $ npm install -D babel-cli babel-core babel-preset-env nodemon

3- Create new file .babelrc and add next lines to it

   // .babelrc
   {
   "presets": ["env"]
   }

4- on package.json  add to scripts next line

   "start": "nodemon index.js --exec babel-node -e js",

5- now to you ready to start your server using $ npm run start

*/
import express from 'express'

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Welcome to Graphql Server')
})

// Steps of creating graphql server
// 1- Schema
//      a- Create schema.js file
// 2- Resolver
//      a- Create resolvers.js file
// 3- Configurations =>
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import resolvers from './resolvers'

const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
