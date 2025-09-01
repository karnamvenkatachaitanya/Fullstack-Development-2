// Import the 'express' library
const express = require('express');
// Import the 'path' module, which helps work with file and directory paths.
const path = require('path');

// Create an instance of the Express application.
const app = express();

// Define the port number the server will listen on.
const port = process.env.PORT || 3000;

// This is the crucial new line:
// It tells Express to serve any static files (like HTML, CSS, images) from the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and have it listen for incoming connections on the specified port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
