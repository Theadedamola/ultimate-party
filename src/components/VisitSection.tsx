import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { motionSettings } from "../hooks/FramerSettings";

function VisitSection() {
  return (
    <section id="visit" className="py-20 bg-[#090909]">
      <motion.div
        {...motionSettings}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Visit Our Community
        </h2>
        <div className="bg-[#111111] rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Community of Sport Lovers, Banter specialists and Analysts
              </h3>
              <p className="text-gray-300 mb-6">
                Join our vibrant community where passion meets performance. A
                family of sport lovers, banter specialists and overall helping
                one another.
              </p>
              <Link
                to="https://chat.whatsapp.com/EVUhMjBx8mY0jIyx6KAK4H"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
              >
                Join Community
              </Link>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1470"
                alt="Soccer Stadium"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default VisitSection; 