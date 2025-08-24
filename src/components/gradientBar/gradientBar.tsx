import React from "react";
import "./gradientBar.css"; 

interface GradientBarProps {
  value: number;
}

const GradientBar: React.FC<GradientBarProps> = ({ value }) => {
  const leftPercent = `${value}%`;

  return (
    <div className="gradient-bar-container">
      <div className="gradient-bar-bg"></div>
      <div
        className="gradient-bar-indicator"
        style={{ left: leftPercent }}
      ></div>
    </div>
  );
};

export default GradientBar;
