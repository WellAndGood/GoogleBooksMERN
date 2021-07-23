import { gql } from '@apollo/client';


// Not yet working
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId){
    _id
    username
    savedBooks {
      bookId
      title
      authors
      description
      image
      link
    }
  }
}
`

// Works
export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
   createUser(username: $username, email: $email, password: $password) {
      user {
 			username
      email
     }
   }
}
`
  
// Works
export const LOGIN = gql`  
 mutation login($email: String!, $password: String!){
   login(email: $email, password: $password) {
     token
     user {
       email
     }
   }
 }
`