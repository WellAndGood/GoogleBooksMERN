import { gql } from '@apollo/client';


export const CREATE_USER = gql`
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