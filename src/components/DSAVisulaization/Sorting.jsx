import React, { useState } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40]); // Initial Array
  const [isSorting, setIsSorting] = useState(false); // Sorting State
  const [speed, setSpeed] = useState(500); // Speed control
  const [userInput, setUserInput] = useState(""); // User input array
  const [explanation, setExplanation] = useState("Welcome! Start sorting or create your own array!");

  // Handle User Array Input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Set User Custom Array
  const applyUserArray = () => {
    const customArray = userInput.split(",").map(Number).filter(n => !isNaN(n)); // Parse and validate input
    if (customArray.length > 0) {
      setArray(customArray);
      setExplanation("Custom array set! Click 'Start Sorting' to begin.");
    } else {
      setExplanation("Please enter valid numbers separated by commas.");
    }
  };

  // Reset Array and State
  const resetArray = () => {
    setArray([30, 10, 50, 20, 60, 40]);
    setIsSorting(false);
    setExplanation("Array reset! Ready for sorting.");
  };

  // Handle Speed Change
  const handleSpeedChange = (e) => {
    setSpeed(1000 - e.target.value); // Adjust speed inversely
  };

  // Bubble Sort with Explanations
  const bubbleSort = () => {
    let arr = [...array];
    let steps = [];
    let explanations = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
          explanations.push(`Swapping ${arr[j + 1]} and ${arr[j]}`);
        } else {
          explanations.push(`No need to swap ${arr[j]} and ${arr[j + 1]}`);
        }
        steps.push([...arr]); // Capture the array state after each step
      }
    }
    return { steps, explanations };
  };

  // Start Sorting Process
  const startSorting = () => {
    setIsSorting(true);
    const { steps, explanations } = bubbleSort();

    steps.forEach((step, index) => {
      setTimeout(() => {
        setArray(step);
        setExplanation(explanations[index]);

        if (index === steps.length - 1) {
          setIsSorting(false);
        }
      }, index * speed);
    });
  };

  return (
    <div className="sorting-visualizer p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sorting Visualizer</h2>

      {/* Array Visualization */}
      <div className="flex gap-2 mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 text-white flex items-end justify-center"
            style={{ height: `${value * 5}px`, width: "30px" }}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Explanation */}
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="text-xl font-semibold">Explanation</h3>
        <p>{explanation}</p>
      </div>

      {/* Input Array, Start Sorting, and Reset Controls */}
      <div className="flex flex-col items-start gap-4 mb-4">
        {/* User Array Input */}
        <div>
          <input
            type="text"
            placeholder="Enter numbers (e.g., 30,10,50)"
            value={userInput}
            onChange={handleUserInput}
            className="border p-2 rounded"
          />
          <button
            onClick={applyUserArray}
            disabled={isSorting}
            className="primary-btn ml-2"
          >
            Set Custom Array
          </button>
        </div>

        {/* Sorting Button */}
        <button
          onClick={startSorting}
          disabled={isSorting}
          className="primary-btn"
        >
          {isSorting ? "Sorting in Progress..." : "Start Sorting"}
        </button>

        {/* Reset Button */}
        <button
          onClick={resetArray}
          disabled={isSorting}
          className="secondary-btn"
        >
          Reset
        </button>

        {/* Speed Control */}
        <div className="flex items-center gap-2">
          <label>Speed Control:</label>
          <input
            type="range"
            min="1"
            max="1000"
            onChange={handleSpeedChange}
            disabled={isSorting}
          />
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
