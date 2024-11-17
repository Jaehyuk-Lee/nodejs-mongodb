import * as query from './src/queries';

query.insertUser({ name: 'Jaehyuk', email: 'a@a.com', age: 28 });
query.getUsers().then(console.log);