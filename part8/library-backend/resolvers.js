const {UserInputError, AuthenticationError} = require('apollo-server');
const jwt = require('jsonwebtoken');
const Book = require('./schema/Book');
const Author = require('./schema/Author');
const User = require('./schema/User');

const resolvers = {
    Query: {
      me: async (root, args, context) => {
        return context.currentUser;
      },
      bookCount: async () => Book.collection.countDocuments(),
      authorCount: async () => Author.collection.countDocuments(),
      AllBooks: async (root, args) => {
        let author = null;
        if (args.author) author = await Author.findOne({name: args.author});
        if (args.author && !author) return [];
  
        let filter = {};
        if (args.author) filter = {author: author.id};
        if (args.genre) filter = {genres: {$elematch: {$eq: args.genre}}}
        if (args.author && args.genre)
        filter = {
          author: author.id,
          genres: {$elematch: {$eq: args.genre}},
        }
        return await Book.find(filter).populate('author');
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

  module.exports = resolvers