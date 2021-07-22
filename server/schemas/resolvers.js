const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all books
        me: async () => {
          return User.find({});
        },
        book: async() => {
            return Book.find({})
        }
      },
    Mutation: {
        createUser: async ( parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return {token, user}
          },
    }
}

module.exports = resolvers