import React from "react";

function ErrorBoundary(props) {
  try {
    return props.children;
  } catch (error) {
    if (error) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error && error.toString()}</p>
        </div>
      );
    }
  }
}

export default ErrorBoundary;
