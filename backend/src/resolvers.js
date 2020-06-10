const db = require('./database/config');


module.exports = {
  Query: {
    async users () {
      return await db('users').select('*');
    },
    
    async user (_, { id }) {
      return await db('users').where({ id });
    }
  },
  
  Mutation: {
    async createUser (_, {name, email}) {
      const result = await db('users').insert({
        name,
        email
      });
      
      const id = result[0];

      return await db('users')
        .where({ id })
        .first();
    }
  }
}
