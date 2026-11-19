const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SOE RECAP MYANMAR",
    status: "Server is ready"
  });
});

app.post("/translate", (req, res) => {
  res.json({
    message: "Translation system is not connected yet",
    status: "waiting"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});

