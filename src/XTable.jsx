import React, { useState } from 'react';

const XTable = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  // Sort by Date (descending), then by Views (descending)
  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff !== 0) return dateDiff;
      return b.views - a.views;
    });
    setData(sorted);
  };

  // Sort by Views (descending), then by Date (descending)
  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      const viewsDiff = b.views - a.views;
      if (viewsDiff !== 0) return viewsDiff;
      return new Date(b.date) - new Date(a.date);
    });
    setData(sorted);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Date and Views Table</h1>

      <button onClick={sortByDate} style={{ marginRight: '10px' }}>
        Sort by Date
      </button>
      <button onClick={sortByViews}>
        Sort by Views
      </button>

      <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.views}</td>
              <td>{entry.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
