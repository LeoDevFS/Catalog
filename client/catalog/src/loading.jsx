import React from "react";
import "./App.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading products...</p>
    </div>
  );
}

export default Loading;