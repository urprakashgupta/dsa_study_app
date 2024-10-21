import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const ServicesData = [
  {
    id: 1,
    title: "DSA Notes 📒",
    path: "/notes", // Path to your notes route
    icon: <VscBook />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Interactive Algorithm Visualizations",
    path: "/DSAVisualization",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          How We Help You Learn
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              {/* Wrap the service title in Link */}
              <Link to={service.path} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold px-3">
                  {service.title}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
