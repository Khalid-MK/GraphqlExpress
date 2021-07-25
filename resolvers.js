import { nanoid } from 'nanoid'

class User {
    constructor(id, {
        username, name, email, phone, website, status, posts
    }) {
        this.id = id;
        this.username = username
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.status = status;
        this.posts = posts
    }
}

const userStorage = {
    "1": {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    "2": {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    "3": {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    "4": {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
    }
}

class Post {
    constructor(id, { title, body }) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

const postStorage = {}

const resolvers = {
    getUser: ({ id }) => {
        return new User(id, userStorage[id])
    },
    users: () => {
        let users = []
        for (const [key, value] of Object.entries(userStorage)) {
            users.push(new User(key, value))
        }
        return users
    },
    createUser: ({ input }) => {
        let id = nanoid()
        userStorage[id] = input
        return new User(id, input)
    },
    createPost: ({ input }) => {
        let id = nanoid()
        postStorage[id] = input
        return new Post(id, input)
    }
}

export default resolvers