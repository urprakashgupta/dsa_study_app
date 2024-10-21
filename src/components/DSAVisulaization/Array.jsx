import React, { useState } from "react";

const ArrayVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);

  const insertValue = (value) => {
    setArray((prevArray) => [...prevArray, value]);
  };

  const deleteValue = () => {
    setArray((prevArray) => prevArray.slice(0, prevArray.length - 1));
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-red-500 text-white p-2"
            style={{ height: `${value * 5}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <button className="primary-btn mr-2" onClick={() => insertValue(60)}>
        Insert Value
      </button>
      <button className="primary-btn" onClick={deleteValue}>
        Delete Value
      </button>
    </div>
  );
};

export default ArrayVisualizer;
