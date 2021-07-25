import { buildSchema } from 'graphql'

/*

use type keyword to define new type
and foreatch property you should select its type 
(ID, String, Int, Float, customDataType)

type MyType {
    id: ID
    name: String
    age: Int
    status: MyEnum
    ...
}

use enum keyword to define enum
enum MyEnum {
    active
    inactive
    ...
}

use type Query keyword to define resolvers
type Query {
    // resolverName(parameters: typeOfPrameter): returnType
    getSpecificElement(id: ID): MyType
    getAllElements: [MyType]
}

use input keyword to define inputs
use ! for Required propreties
input MyTypeInput {
    id: ID
    name: String
    age: Int!
    status: MyEnum!
    ...
}

use type Mutation keyword to define the function that responsable of fulfill data into the storage
type Mutation {
    // resolverName(inputName: typeOfInput): returnType
    createElemet(input: MyTypeInput): MyType
}   

*/

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        username: String
        email: String
        phone: String
        website: String
        status: Status
        posts: [Post]
    }

    type Post {
        id: ID
        title: String
        body: String
    }

    enum Status {
        active
        inactive
    }

    type Query {
        getUser(id: ID): User
        users: [User]
    }

    input UserInput {
        name: String!
        username: String!
        email: String
        phone: String
        website: String
        status: Status
        posts: [PostInput]
    }

    input PostInput {
        title: String!
        body: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        createPost(input: PostInput): Post
    }
`)

export default schema;