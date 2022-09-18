const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
const { default: mongoose } = require('mongoose');
const Author = require('./schema/Author');
require('dotenv').config()
const Book = require('./schema/Book');


//let authors = [
//  {
//    name: 'Robert Martin',
//    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
//    born: 1952,
//  },
//  {
//    name: 'Martin Fowler',
//    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
//    born: 1963
//  },
//  {
//    name: 'Fyodor Dostoevsky',
//    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
//    born: 1821
//  },
//  { 
//    name: 'Joshua Kerievsky', // birthyear not known
//    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
//  },
//  { 
//    name: 'Sandi Metz', // birthyear not known
//    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
//  },
//]

/*
 * Suomi:
 * Saattaisi olla järkevämpää assosioida kirja ja sen tekijä tallettamalla kirjan yhteyteen tekijän nimen sijaan tekijän id
 * Yksinkertaisuuden vuoksi tallennamme kuitenkin kirjan yhteyteen tekijän nimen
 *
 * English:
 * It might make more sense to associate a book with its author by storing the author's id in the context of the book instead of the author's name
 * However, for simplicity, we will store the author's name in connection with the book
 *
 * Spanish:
 * Podría tener más sentido asociar un libro con su autor almacenando la id del autor en el contexto del libro en lugar del nombre del autor
 * Sin embargo, por simplicidad, almacenaremos el nombre del autor en conección con el libro
*/

//let books = [
//  {
//    title: 'Clean Code',
//    published: 2008,
//    author: 'Robert Martin',
//    id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
//    genres: ['refactoring']
//  },
//  {
//    title: 'Agile software development',
//    published: 2002,
//    author: 'Robert Martin',
//    id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
//    genres: ['agile', 'patterns', 'design']
//  },
//  {
//    title: 'Refactoring, edition 2',
//    published: 2018,
//    author: 'Martin Fowler',
//    id: "afa5de00-344d-11e9-a414-719c6709cf3e",
//    genres: ['refactoring']
//  },
//  {
//    title: 'Refactoring to patterns',
//    published: 2008,
//    author: 'Joshua Kerievsky',
//    id: "afa5de01-344d-11e9-a414-719c6709cf3e",
//    genres: ['refactoring', 'patterns']
//  },  
//  {
//    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
//    published: 2012,
//    author: 'Sandi Metz',
//    id: "afa5de02-344d-11e9-a414-719c6709cf3e",
//    genres: ['refactoring', 'design']
//  },
//  {
//    title: 'Crime and punishment',
//    published: 1866,
//    author: 'Fyodor Dostoevsky',
//    id: "afa5de03-344d-11e9-a414-719c6709cf3e",
//    genres: ['classic', 'crime']
//  },
//  {
//    title: 'The Demon ',
//    published: 1872,
//    author: 'Fyodor Dostoevsky',
//    id: "afa5de04-344d-11e9-a414-719c6709cf3e",
//    genres: ['classic', 'revolution']
//  },
//]

console.log('connecting to mongoDB');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((error) => {
    console.log('error connection to mongoDB', error.message);
  })



const typeDefs = gql`

  type nameAuthor {
    author: String!
  }

  type Books {
    title: String!
    published: Int!
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
    AllBooks: [Books!]!
    AllAuthors: [Author!]!
    findPerson(name: String!) : Author
    findAuthor(genre: String): [Books!]!
    findByYear(published: String!): [Books!]!
    GetMemes: [Memes]!
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
  }
`

const resolvers = {
  Query: {
    bookCount: async () => Book.collection.countDocuments(),
    authorCount: async () => Author.collection.countDocuments(),
    AllBooks: async () => Book.find({}),
    AllAuthors: async () => Author.find({}),
    findPerson: async (root, args) => {
      const author = await Author.findOne({name: args.name});
      return author;
    },
    findAuthor: (root, args) => {
        return books.filter((book) => book.genres.includes(args.genre))
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
  Mutation: {
    addBook: async (root, args) => {
      let author = await Author.findOne({name: args.author})
      if(!author) {
        return null;
      }
      let book = new Book({...args, author: author.id});
      await book.save();
      book = await book.populate('author');
      return book;
    },
    editAuthor: async (root, args) => {
      const editAuthor = await Author.findOneAndUpdate({name: args.name, born: args.born});
      if(!editAuthor) {
        return null
      };
      return editAuthor.save()

  },
  editTitle: (root, args) => {
    const author = books.find((ele) => ele.id === args.id);
    if(!author) return null;
    console.log(author)
    const updateTitle = {...author, title: args.title};
    books = books.map((ele) => {
      return ele.id === updateTitle.id ? updateTitle : ele
    });
    return updateTitle

  }
},
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})