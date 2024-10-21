import React from "react";
import Sorting from "./Sorting";
import TreeVisualizer from "./Tree"
import ArrayVisualizer from "./Array";

const DSAVisualization = () => {
  return (
    <section className="container py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        DSA Visualizations
      </h1>
      
      {/* Sorting Algorithms */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-5">Sorting Algorithms</h2>
        <Sorting />
      </div>

      {/* Tree Visualizations */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-5">Tree Data Structures</h2>
        <TreeVisualizer />
      </div>

      {/* Array Visualizations */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-5">Array Operations</h2>
        <ArrayVisualizer />
      </div>
    </section>
  );
};

export default DSAVisualization;
