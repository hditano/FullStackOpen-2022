import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        value
    }
}
`

export const ALL_AUTHORS = gql`
query {
  AllAuthors {
    id
    name
    born
    bookCount
  }
}
`

export const CHANGE_BORN = gql`
mutation changeBorn($name: String!, $born: Int!) {
  editAuthor(name: $name,born: $born) {
    name
    born
    bookCount
  }
}
`

export const CREATE_BOOK = gql`
mutation createBook ($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
  addBook(
    title: $title
    published: $published
    author: $author
    genres: $genres
  ) {
    title
    author {
      name
      born
    }
    published
  }
 }
`

export const ALL_BOOKS = gql`
query {
  AllBooks {
    title
    published
    genres
    id
    author {
      id
      name
      born
    }
  }
  }
`