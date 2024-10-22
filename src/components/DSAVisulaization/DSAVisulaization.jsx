import React from "react";
import Sorting from "./Sorting";
import LinearSearchVisualizer from "./LinerarSearch"
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

      {/* linear search Visualizations */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-5">Linear Search Algorithms</h2>
        <LinearSearchVisualizer />
      </div>
    </section>
  );
};

export default DSAVisualization;
