const users = [
  { id: 1, name: 'Joana de Melo Arruda', email: 'josya159@yahoo.com'},
  { id: 2, name: 'Carolina Silva', email: 'carols3@gmail.com'}
];
module.exports = {
  Query: {
    users: () => {
      return users;
    },
    
    user: () => {
      return users[0]; 
    }
  },
  
  Mutation: {
    createUser: () => {
      return users[0];
    }
  }
}
