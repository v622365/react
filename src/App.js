import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import DragUploader from "./components/DragUploader";
import "./App.css";

function App() {
  function MyComponent() {
    throw new Error("I crashed!");
  }
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <DragUploader />
      </ErrorBoundary>
    </div>
  );
}

export default App;
