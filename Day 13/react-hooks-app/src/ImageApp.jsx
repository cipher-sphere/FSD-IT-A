import React, { useState } from "react";
import "./ImageApp.css";
import pic from "./images/image.png";

const ImageApp = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  return (
    <div className="disp">
      <div
        className="image"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          animation: isAutoRotating ? "infinite-rotation 2s linear infinite" : "none",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <img
          src={pic}
          alt="Dynamic"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="panel">
        <button onClick={() => setWidth(width + 10)}>Increase width</button>
        <button onClick={() => setWidth(width - 10)}>Decrease width</button>
        <button onClick={() => setHeight(height + 10)}>Increase height</button>
        <button onClick={() => setHeight(height - 10)}>Decrease height</button>
        <button onClick={() => setRotation(rotation + 10)}>
          Rotate Clockwise
        </button>
        <button onClick={() => setRotation(rotation - 10)}>
          Rotate Anti-Clockwise
        </button>
        <button onClick={() => setIsAutoRotating(!isAutoRotating)}>
          {isAutoRotating ? "Stop Auto Rotation" : "Start Auto Rotation"}
        </button>
      </div>
    </div>
  );
};

export default ImageApp;
