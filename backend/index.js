

// File: backend/index.js

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { saveToSheet } = require("./sheets");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/api/book-demo", async (req, res) => {
//   try {
//     await saveToSheet(req.body);
//     res.status(200).json({ success: true, message: "Saved to Google Sheet ✅" });
//   } catch (err) {
//     console.error("❌ Error saving to sheet:", err);
//     res.status(500).json({ success: false, message: "Failed to save to Google Sheet" });
//   }
// });

// app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));




export default async function handler(req, res) {
  const { saveToSheet } = await import('../../backend/sheets'); // adjust path as needed

  if (req.method === 'POST') {
    try {
      await saveToSheet(req.body);
      res.status(200).json({ success: true, message: "Saved to Google Sheet ✅" });
    } catch (err) {
      console.error("❌ Error saving to sheet:", err);
      res.status(500).json({ success: false, message: "Failed to save to Google Sheet" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}