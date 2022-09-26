const { gql } = require('apollo-server');

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
    AllBooks(id: String) : [Books]!
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


  type Subscription {
    addedBook: Books!
  }
`

module.exports = typeDefs