import React, { useState } from "react";

const defaultRows = 15, defaultCols = 6;
function makeGrid(r, c) {
  return Array.from({ length: r }, () =>
    Array.from({ length: c }, () => "")
  );
}

export default function Spreadsheet() {
  const [grid, setGrid] = useState(makeGrid(defaultRows, defaultCols));

  const updateCell = (r, c, val) => {
    const g = grid.map((row) => row.slice());
    g[r][c] = val;
    setGrid(g);
  };

  const importCSV = (csv) => {
    const rows = csv.trim().split("\n").map((r) => r.split(","));
    setGrid(rows);
  };

  const exportCSV = () => {
    return grid.map((row) => row.join(",")).join("\n");
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          onClick={() => {
            const blob = new Blob([exportCSV()], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "spreadsheet.csv";
            a.click();
          }}
        >
          Export CSV
        </button>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            const f = e.target.files[0];
            if (!f) return;
            const reader = new FileReader();
            reader.onload = (ev) => importCSV(ev.target.result);
            reader.readAsText(f);
          }}
        />
      </div>

      <table border="1" cellPadding="4">
        <tbody>
          {grid.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} style={{ minWidth: 80 }}>
                  <input
                    value={grid[r][c]}
                    onChange={(e) => updateCell(r, c, e.target.value)}
                    style={{ width: 120, border: "none" }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
