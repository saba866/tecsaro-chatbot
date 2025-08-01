// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const appendBooking = require("./sheets");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post("/api/book-demo", async (req, res) => {
//   const { name, email, time } = req.body;
//   try {
//     await appendBooking(name, email, time);
//     res.json({ message: "✅ Demo booked and added to Google Sheet!" });
//   } catch (error) {
//     console.error("Google Sheets error:", error);
//     res.status(500).json({ error: "Failed to save to Google Sheet" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// File: backend/index.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { saveToSheet } = require("./sheets");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/book-demo", async (req, res) => {
  try {
    await saveToSheet(req.body);
    res.status(200).json({ success: true, message: "Saved to Google Sheet ✅" });
  } catch (err) {
    console.error("❌ Error saving to sheet:", err);
    res.status(500).json({ success: false, message: "Failed to save to Google Sheet" });
  }
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));




