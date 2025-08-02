import { saveToSheet } from "./utils/sheets.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
