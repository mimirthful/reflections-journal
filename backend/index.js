const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

app.listen(8080, () => {
  console.log('listening on 8080');
});