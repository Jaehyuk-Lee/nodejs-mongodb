import express from 'express';
const app = express();
import * as query from './src/queries';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers',
        'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization');
    next();
});

app.get('/insert', async (req, res) => {
    await query.insertUser({ name: 'Jaehyuk', email: 'a@a.com', age: 28 });
    res.send('Insert Success');
});

app.get('/get', async (req, res) => {
    const users = await query.getUsers();
    res.send(users);
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
