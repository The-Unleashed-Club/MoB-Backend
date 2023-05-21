const mongoose = require('mongoose');

// Define the table schema
const tableSchema = new mongoose.Schema({
  columns: {
    type: [String],
    required: true
  },
  rows: {
    type: [{
      No: String,
      Name: String,
      Price: String,
      Type: String
    }],
    required: true
  },
  tableName: {
    type: String,
    required: true
  }
});

// Create the Table model
const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
