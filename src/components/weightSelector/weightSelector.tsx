import React from "react";
import './weightSelector.css';

interface WeightSelectorProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
}

const WeightSelector: React.FC<WeightSelectorProps> = ({
  label,
  onChange,
  defaultValue = "0.2",
}) => {
  return (
    <div className="weight-selector">
      <p>
        {label}:
      </p>
      <select
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {Array.from({ length: 11 }, (_, i) => (i * 0.1).toFixed(1)).map(
          (val) => (
            <option key={val} className="text-asi-color" value={val}>
              {val === "1.0" ? "1" : val}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default WeightSelector;
