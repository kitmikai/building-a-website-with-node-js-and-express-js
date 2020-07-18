const express = require('express');

const app = express();

const port = 3000;

// Route for default page
app.get('/', (request, response) => {
  response.send('Hello Express :-)');
});

// Start the server and tell it where to listen
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
