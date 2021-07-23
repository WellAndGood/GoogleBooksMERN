import { gql } from '@apollo/client';


// Not yet working
export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!, $authors: [String], $description: String!, $title: String!, $image: String!, $link: String!) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
      bookId
      authors
      description
      image
      link
      title
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