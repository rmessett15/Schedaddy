const { User, Company, Address } = require("../models");
// const { signToken } = require("../utils/auth");

console.log("hello");

const resolvers = {
  Query: {
    users: async (parent) => {
      console.log("hello");
      // if (context.user) {
      //   return User.find({ _id: context.user._id });
      // }
      // throw new Error("user not found");
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      console.log(args.input);
      // const user = await User.create( args );
      // return { user }
    },
    createAccount: async (parents, args) => {
      console.log(args);
      const user = await User.create({
        email: args.email,
        password: args.password,
      });
    },
  },
};
