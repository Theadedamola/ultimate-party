import { motion } from "framer-motion";
import { motionSettings } from "../hooks/FramerSettings";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute bg-hero-bg inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <motion.div {...motionSettings} className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            The Ultimate Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Making this community great again
          </p>
          <button 
            onClick={() => document.getElementById('candidates')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Meet Our Candidates
          </button>
        </div>
      </motion.div>
    </div>
  );
}