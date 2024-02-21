const apiController = {
  getData: (req, res) => {
    // Fetch data logic
    res.json({ message: "API data endpoint" });
  },
  createData: (req, res) => {
    // Create data logic
    res.json({ message: "API create endpoint" });
  },
};

module.exports = apiController;
