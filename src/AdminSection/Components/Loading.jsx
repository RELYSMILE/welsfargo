import { useState, useContext } from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#808080');
  return (
    <div className="sweet-loading">

      <MoonLoader
        color={color}
        loading={loading}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading