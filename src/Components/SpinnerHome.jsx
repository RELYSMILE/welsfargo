import React from 'react'
import { useState } from "react";
import { BounceLoader } from "react-spinners";

const SpinnerHome = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("tomato");
    return (
      <div className="sweet-loading">
  
        <BounceLoader
          color={color}
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}

export default SpinnerHome