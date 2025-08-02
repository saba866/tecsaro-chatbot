const { google } = require("googleapis");
require("dotenv").config();

// ✅ Use environment variables instead of JSON file
const auth = new google.auth.GoogleAuth({
  credentials: {
    project_id: process.env.GOOGLE_PROJECT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// ✅ Your Google Sheet ID
const SPREADSHEET_ID = "1CJGx5fiKYL6TvgqXx9bKJptRGx6O2YQfqHQOsJn_4LY";

async function saveToSheet({
  name,
  brand,
  email,
  phone,
  service,
  description,
  budget,
  country,
}) {
  try {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    const timestamp = new Date().toLocaleString();

    const values = [
      [name, brand, email, phone, service, description, budget, country, timestamp],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1", // Sheet tab name
      valueInputOption: "USER_ENTERED",
      resource: { values },
    });

    console.log("✅ Data saved to Google Sheet successfully!");
  } catch (error) {
    console.error("❌ Error saving to Google Sheet:", error);
  }
}

module.exports = { saveToSheet };





