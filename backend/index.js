const express = require('express');
const DB = require('./DatabaseCommunication.mjs').default
const cors = require('cors');
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());  

app.get('/', (req, res) => {
    
    const saved= DB.GetReflections();
    res.json(saved);

});

app.get(`/remove`, (req, res) => {
    const id = req.query.id
    DB.RemoveReflection(id)
    res.status(201).json({ message: 'Reflection deleted'});

});

app.post('/', (req, res) =>
  {
    const data = JSON.stringify(req.body);
    DB.PostReflections(data)
    res.status(201).json({ message: 'Reflection saved'});
  }
)

app.listen(8080, () => {
  console.log('listening on 8080');
});