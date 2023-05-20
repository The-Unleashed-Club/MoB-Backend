const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.json({ message: "Backend WORKING" });
});

app.get("/api/user", (req, res) => {
  // Handle GET request for user data
  // Implement your logic here
  res.json({ message: "User data endpoint" });
});

app.post("/api/user", (req, res) => {
  // Handle POST request for creating a user
  // Implement your logic here
  res.json({ message: "User created" });
});

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://nandini25agarwal:W4g3JfdtIPYKsydW@cluster0.7jbrcce.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// // Assuming you have a JSON file with table data named 'tables.json' in the same directory
// const tables = require('./tables.json');

// // Middleware to parse request bodies as JSON
// app.use(bodyParser.json());

// // Endpoint to retrieve a list of existing tables
// app.get('/api/tables', (req, res) => {
//   res.json(tables);
// });

// // Endpoint to retrieve columns and rows of a specific table
// app.get('/api/tables/:id', (req, res) => {
//   const { id } = req.params;
//   const table = tables.find(table => table.id === id);

//   if (!table) {
//     return res.status(404).json({ error: 'Table not found' });
//   }

//   const { columns, rows } = table;
//   res.json({ columns, rows });
// });

// // Endpoint to accept new table data and store it
// app.post('/api/tables', (req, res) => {
//   const newTable = req.body;

//   // Assuming the new table data is in the format { id: 'tableId', columns: [...], rows: [...] }
//   tables.push(newTable);
//   res.status(201).json({ message: 'Table created successfully' });
// });

// // Endpoint to update column and row data for a specific table
// app.put('/api/tables/:id', (req, res) => {
//   const { id } = req.params;
//   const updatedTable = req.body;

//   const tableIndex = tables.findIndex(table => table.id === id);

//   if (tableIndex === -1) {
//     return res.status(404).json({ error: 'Table not found' });
//   }

//   // Update the column and row data of the table
//   tables[tableIndex].columns = updatedTable.columns;
//   tables[tableIndex].rows = updatedTable.rows;

//   res.json({ message: 'Table updated successfully' });
// });

// app.delete('/api/tables/:id', (req, res) => {
//   const { id } = req.params;
//   const tableIndex = tables.findIndex(table => table.id === id);

//   if (tableIndex === -1) {
//     return res.status(404).json({ error: 'Table not found' });
//   }

//   tables.splice(tableIndex, 1);
//   res.json({ message: 'Table deleted successfully' });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
