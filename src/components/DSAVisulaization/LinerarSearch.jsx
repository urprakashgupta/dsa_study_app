import React, { useState, useEffect } from "react";
import { FaPlay, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";

const linearSearchStep = (arr, target, stepIndex) => {
  if (stepIndex >= arr.length) return { found: false, value: null };
  if (arr[stepIndex] === target) {
    return { found: true, value: arr[stepIndex] };
  }
  return { found: false, value: arr[stepIndex] };
};

const LinearSearchVisualizer = () => {
  const [bars, setBars] = useState([14, 33, 27, 85, 62, 44, 18, 90]);
  const [target, setTarget] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [found, setFound] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [speed, setSpeed] = useState(500); // Speed in milliseconds
  const [sorting, setSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState({});
  
  const handlePlay = () => {
    if (target === null) return;
    setSorting(true);
  };

  const handleNext = () => {
    if (stepIndex < bars.length) {
      const result = linearSearchStep(bars, target, stepIndex);
      setCurrentStep(result);
      setComparisons(stepIndex + 1);
      setStepIndex(stepIndex + 1);
      if (result.found) {
        setFound(true);
        setSorting(false);
      }
    }
  };

  useEffect(() => {
    if (sorting && stepIndex < bars.length && !found) {
      setTimeout(() => {
        handleNext();
      }, speed);
    }
  }, [sorting, stepIndex, found, speed]);

  const resetBars = () => {
    setBars([14, 33, 27, 85, 62, 44, 18, 90]);
    setTarget(null);
    setComparisons(0);
    setFound(false);
    setStepIndex(0);
    setCurrentStep({});
    setSorting(false);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-3xl">
      {/* Bar Representation */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 mb-4">
          {bars.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: value * 4 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={`w-8 ${currentStep?.value === value ? "bg-green-400" : "bg-blue-500"} rounded`}
            >
              <div className="text-center text-white text-sm mt-2">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <div className="mb-4">
        <input
          type="number"
          value={target || ""}
          onChange={(e) => setTarget(Number(e.target.value))}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
          placeholder="Enter the number to search for"
        />
      </div>

      {/* Observations */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h2 className="text-lg font-bold mb-2">Observations</h2>
        <p>Comparisons: {comparisons}</p>
        {found ? (
          <p>Target {target} found at position {stepIndex}!</p>
        ) : currentStep?.value !== null ? (
          <p>Comparing {currentStep.value} with target {target}...</p>
        ) : (
          <p>Enter a number and click Play or Next.</p>
        )}
      </div>

      {/* Speed Slider */}
      <div className="flex justify-between items-center mb-4">
        <label>Min. Speed</label>
        <input
          type="range"
          min="100"
          max="2000"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className="w-64 mx-4"
        />
        <label>Max. Speed</label>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={handleNext}
          disabled={sorting || target === null || found}
        >
          Next
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={resetBars}
        >
          <FaRedo />
          Reset
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={handlePlay}
          disabled={sorting || target === null || found}
        >
          <FaPlay />
          Play
        </button>
      </div>
    </div>
  );
};

export default LinearSearchVisualizer;
