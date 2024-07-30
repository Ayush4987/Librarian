const express = require('express')
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Mern Pro')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})