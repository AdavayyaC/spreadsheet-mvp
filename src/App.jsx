import React from "react";
import Spreadsheet from "./components/Spreadsheet";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1> Spreadsheet MVP ⚓</h1>
      <p>A simple online spreadsheet app with CSV import/export.</p>
      <Spreadsheet />
    </div>
  );
}
