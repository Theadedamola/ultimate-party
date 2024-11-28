import { motion } from 'framer-motion'
import ollams from '../assets/ollams1.jpeg'
import { motionSettings } from '../hooks/FramerSettings'

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#111111]">
      <motion.div {...motionSettings} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={ollams} alt="" className="w-80 rounded-2xl" />
          <p>Party Leader</p>
        </div>
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          About WSU's Ultimate Team
        </h2>
        <div className="text-gray-300 max-w-3xl mx-auto">
          <p className="mb-6 text-center">
            At World Soccer Updates (WSU), we're dedicated to fostering a
            vibrant sports community that embodies the essence of quality
            analysis, engaging banter, and most importantly, fun. Our mission is
            to provide a platform where enthusiasts can converge, share their
            passion, and indulge in lively discussions that elevate the world of
            sports.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
