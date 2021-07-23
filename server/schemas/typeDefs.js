const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
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

        saveBook(bookId: String!, authors: [String], description: String!, title: String!, image: String!, link: String!): User

        removeBook(bookId: String!): User

        login(email: String!, password: String!): Auth

    }
`

module.exports = typeDefs;