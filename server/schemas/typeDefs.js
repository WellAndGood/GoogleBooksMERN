const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String!
        link: String!
      }

    type Auth {
        token: String!
         user: User
    }

    type Query {
        me: User,
        book: [Book]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!, authors: [String], description: String!, title: String!, image: String!, link: String!): Book
    }
`

// addUser should return Auth instead of User (User is for testing)

//     login(email: String!, password: String!): Auth
//     saveBook(input: Book): Book
//     removeBook(bookId: String!): Book

module.exports = typeDefs;