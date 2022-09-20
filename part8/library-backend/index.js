const { ApolloServer, gql, UserInputError, AuthenticationError } = require('apollo-server');
const axios = require('axios');
const { default: mongoose } = require('mongoose');
const Author = require('./schema/Author');
require('dotenv').config()
const Book = require('./schema/Book');
const User = require('./schema/User');
const jwt = require('jsonwebtoken');


console.log('connecting to mongoDB');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((error) => {
    console.log('error connection to mongoDB', error.message);
  })



const typeDefs = gql`

  type User {
    username: String!
    favouriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }

  type nameAuthor {
    author: String!
  }

  type Books {
    title: String!
    published: Int
    author: Author!
    genres: [String!]
    id: ID!
  }

  type Author {
    id: ID!
    name: String!
    born: Int
    bookCount: Int
  }

  type Memes {
    id: String!
    name: String!
    url: String!
    width: Int!
    height: Int!
    box_count: Int!
  }


  type Query {
    bookCount: Int!
    authorCount: Int!
    AllBooks(id: String) : [Books!]!
    AllAuthors: [Author!]!
    findPerson(name: String!) : Author
    findAuthor(genre: String): [Books!]!
    findByYear(published: String!): [Books!]!
    GetMemes: [Memes]!
    me: User
  }

  type Mutation {
    addBook (
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ) : Books!
    editAuthor(name: String!, born: Int!) : Author
    editTitle(
      id: ID!
      title: String!
    ): Books
    createUser(
      username: String!
      favouriteGenre: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }
`

const resolvers = {
  Query: {
    me: async (root, args, context) => {
      return context.currentUser;
    },
    bookCount: async () => Book.collection.countDocuments(),
    authorCount: async () => Author.collection.countDocuments(),
    AllBooks: async (root, args) => {
      const result = await Book.findOne({id: args.id})
      console.log(result)
    },
    AllAuthors: async () => Author.find({}),
    findPerson: async (root, args) => {
      const author = await Author.findOne({name: args.name});
      return author;
    },
      findAuthor: async (root, args) => {
      let findAuthor = await Book.find({genres: args.genre});
      return findAuthor;
    },
    findByYear: async (root, args) => {
      const findYear = await Author.find({published: args.published});
      return findYear;
    },
    GetMemes: async (root, args) => {
      const {data: {data}} = await axios.get('https://api.imgflip.com/get_memes');
      return data.memes;
    }
  },
  // Takes bookCount field from type Author, and makes it count each book that is at the database with the same author ID. Everytime Author has to be returned it makes, bookCount is resolved with the info
  // give on the below resolver
  Author: {
    bookCount: async (root) => 
      await Book.find({author: root.id}).countDocuments(),
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = new User({username: args.username, favouriteGenre: args.favouriteGenre});
      return user.save()
      .catch(error => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      })
    },
    login: async (root, args) => {
      const user = await User.findOne({username: args.username});

      if(!user || args.password !== '123') {
        throw new UserInputError('wrong credentials')
      }

      const useForToken = {
        username: user.username,
        id: user._id,
      };

      return {value: jwt.sign(useForToken, process.env.JWT_SECRET)}
    },
    addBook: async (root, args, context) => {
      let author = await Author.findOne({name: args.author})

      const currentUser = context.currentUser
      if(!currentUser) {
        throw new AuthenticationError('not authenticated');
      }

      if(!author) {
        return null;
      }

        let book = new Book({...args, author: author.id});
      try {
        await book.save();
        book = await book.populate('author');
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })  
      }
      return book;
    },
    editAuthor: async (root, args, context) => {
      const editAuthor = await Author.findOneAndUpdate({name: args.name, born: args.born});

      const currentUser = context.currentUser;
      if(!currentUser) {
        throw new AuthenticationError('not authenticated');
      }

      if(!editAuthor) {
        return null
      };

      try {
       editAuthor.save()
      } catch (error) {
       throw new UserInputError(error.message, {
        invalidArgs: args,
       }) 
      }
      return editAuthor;
  },
  editTitle: async (root, args) => {
    let editTitle = await Book.findOneAndUpdate({id: args.id, title: args.title});
    console.log(editTitle);
    if(!editTitle) {
      return null;
    }

    try {
    await editTitle.save();
    editTitle = await editTitle.populate('author');
    } catch (error) {
      throw new UserInputError('Malito papu', {
        invalidArgs: args,
      })  
    }
    return editTitle;
  }
},
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({req}) => {
    const auth = req ? req.headers.authorization : null
    if(auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
      const currentUser = await User.findById(decodedToken.id);
      console.log(currentUser)
      return {currentUser}
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})