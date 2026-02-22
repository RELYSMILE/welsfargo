import React from 'react'
import { useState } from "react";
import { BarLoader } from "react-spinners";

const TrackingSpinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#fff");
    return (
      <div className="sweet-loading">
  
        <BarLoader
          color={color}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}

export default TrackingSpinner