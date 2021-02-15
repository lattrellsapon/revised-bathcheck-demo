const express = require('express');
const colors = require('colors');

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

if (process.env.NODE_ENV === 'production') {
  // Set Statoc Folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`.yellow.bold);
});
