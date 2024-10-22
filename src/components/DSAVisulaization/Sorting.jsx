import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaRedo } from "react-icons/fa";
import SortBar from "./SortBar";

const bubbleSort = async (arr, setBars, setSteps, speed) => {
  let tempArray = [...arr];
  let steps = []; // Array to hold step-by-step explanation
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      steps.push(`Comparing ${tempArray[j]} and ${tempArray[j + 1]}`);
      if (tempArray[j] > tempArray[j + 1]) {
        steps.push(`Swapping ${tempArray[j]} and ${tempArray[j + 1]}`);
        [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
      }
      setBars([...tempArray]);
      setSteps([...steps]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    steps.push(`Iteration ${i + 1} completed`);
    setSteps([...steps]);
  }
};

const SortingVisualizer = () => {
  const [bars, setBars] = useState([25, 35, 45, 20, 60, 10, 30]); // Default numbers
  const [sorting, setSorting] = useState(false);
  const [speed, setSpeed] = useState(500); // Speed in milliseconds
  const [inputValue, setInputValue] = useState(""); // For user input
  const [steps, setSteps] = useState([]); // For step-by-step explanation

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Convert input to an array of numbers and set as bars
  const handleSetArray = () => {
    const userArray = inputValue
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));
    setBars(userArray);
    setSteps([]); // Reset steps
  };

  const resetBars = () => {
    setBars([25, 35, 45, 20, 60, 10, 30]); // Reset to default
    setSteps([]); // Reset steps
  };

  const handleSort = () => {
    setSorting(true);
    bubbleSort(bars, setBars, setSteps, speed).then(() => setSorting(false));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Enter numbers (e.g. 10, 20, 30)"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 px-2 py-1 rounded-md w-64"
        />
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={handleSetArray}
          disabled={sorting}
        >
          Set Array
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={handleSort}
          disabled={sorting}
        >
          <FaPlay />
          {sorting ? "Sorting..." : "Start Sort"}
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={resetBars}
          disabled={sorting}
        >
          <FaRedo />
          Reset
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {bars.map((value, idx) => (
          <SortBar key={idx} value={value} />
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-bold mb-2">Sorting Steps</h2>
        <ul className="list-disc pl-5">
          {steps.map((step, idx) => (
            <li key={idx} className="text-sm">{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortingVisualizer;
