import React from "react";

function Error({ error }) {
  return (
    <div className="relative">
      <p
        className="absolute top-0 text-red-500"
        role="alert"
        aria-live="assertive"
      >
        {error}
      </p>
    </div>
  );
}

export default Error;
