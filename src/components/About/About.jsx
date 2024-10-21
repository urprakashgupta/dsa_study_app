import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl underline font-bold text-center text-sky-600 mt-20 ">About Us</h2>
      <p className="text-lg text-gray-700 leading-8 mb-4 mt-5">
        <strong>DSA Explorer 🧑‍💻</strong> is a platform designed to help students and developers
        enhance their understanding of Data Structures and Algorithms (DSA). Our goal is to make the
        learning process interactive and visually engaging by providing real-time algorithm visualizations
        and easy-to-understand study material.
      </p>
      <p className="text-lg text-gray-700 leading-8 mb-4">
        Whether you're preparing for coding interviews or looking to strengthen your DSA knowledge, DSA Explorer 🧑‍💻
        offers a variety of visual tools and explanations for sorting algorithms and other key concepts.
        With our animations, you can observe the step-by-step execution of algorithms like Bubble Sort,
        Merge Sort, and Quick Sort and DSA Notes.
      </p>
      <p className="text-lg text-gray-700 leading-8">
        Stay tuned for more algorithms, study materials, and additional features as we continue to expand
        DSA Explorer 🧑‍💻 to become a comprehensive learning resource for computer science students.
      </p>
    </div>
  );
};

export default About;
