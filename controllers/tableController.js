
const Table = require("../model/tableSchema");

// Get all tables
const getAllTables = (req, res) => {
  Table.find()
    .then((tables) => {
      res.json(tables);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch tables" });
    });
};

// Get a table by ID
const getTableById = (req, res) => {
  const { id } = req.params;

  Table.findById(id)
    .then((table) => {
      if (table) {
        res.json(table);
      } else {
        res.status(404).json({ error: "Table not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch the table" });
    });
};

// Create a new table
const createTable = (req, res) => {
  const { columns, rows, tableName } = req.body;

  const newTable = new Table({
    columns,
    rows,
    tableName,
  });

  newTable
    .save()
    .then((table) => {
      res.json(table);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create the table" });
    });
};

// Update a table
const updateTable = (req, res) => {
  const { id } = req.params;
  const { columns, rows, tableName } = req.body;

  Table.findByIdAndUpdate(id, { columns, rows, tableName }, { new: true })
    .then((table) => {
      if (table) {
        res.json(table);
      } else {
        res.status(404).json({ error: "Table not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the table" });
    });
};

// Delete a table
const deleteTable = (req, res) => {
  const { id } = req.params;

  Table.findByIdAndRemove(id)
    .then((table) => {
      if (table) {
        res.json({ message: "Table deleted" });
      } else {
        res.status(404).json({ error: "Table not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete the table" });
    });
};

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
};
