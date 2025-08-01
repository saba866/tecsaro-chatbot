// const { google } = require("googleapis");
// const keys = require("./demo-booking-service-account.json");

// const auth = new google.auth.GoogleAuth({
//   credentials: keys,
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const SPREADSHEET_ID = "1CJGx5fiKYL6TvgqXx9bKJptRGx6O2YQfqHQOsJn_4LY";

// async function appendBooking(name, email, time) {
//   const client = await auth.getClient();
//   const sheets = google.sheets({ version: "v4", auth: client });

//   const dateNow = new Date().toLocaleString();

//   await sheets.spreadsheets.values.append({
//     spreadsheetId: SPREADSHEET_ID,
//     range: "Sheet1!A:D",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: [[name, email, time, dateNow]],
//     },
//   });
// }

// module.exports = appendBooking;

const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "./demo-booking-service-account.json", // Make sure this file is in the same directory
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = "1CJGx5fiKYL6TvgqXx9bKJptRGx6O2YQfqHQOsJn_4LY"; // ✅ Your actual spreadsheet ID

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
  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: authClient });

  const timestamp = new Date().toLocaleString();

  const values = [
    [name, brand, email, phone, service, description, budget, country, timestamp],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A1", // Your sheet tab name and range
    valueInputOption: "USER_ENTERED",
    resource: {
      values,
    },
  });
}

module.exports = { saveToSheet };




