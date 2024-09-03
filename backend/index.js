const app = require('./app');
const db = require('./config/databse');
const userModel = require('./model/user.model');


const port = 8080; // port to run app

// Define route handler before app.listen()
app.get('/', (req, res) => {
    res.send("Hello World");
});



// Start the server
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
