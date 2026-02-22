import React from 'react'
import { useState } from "react";
import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("tomato");
  return (
    <div className="sweet-loading">

      <BeatLoader
        color={color}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner