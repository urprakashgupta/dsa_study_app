import React from "react";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Notes from "./components/Notes/Notes";
import DSAVisualization from "./components/DSAVisulaization/DSAVisulaization";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      {
        index: true,
        element: (
          <main className="overflow-x-hidden bg-white text-dark">
            <Hero />
            <Services />
            <Banner />
            <Banner2 />
            <Footer />
          </main>
        ),
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/notes",
        element: <Notes />
      },
      {
        path: "DSAVisualization",
        element: <DSAVisualization />
      }
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default App;
