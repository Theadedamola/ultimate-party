import Marquee from 'react-fast-marquee'
import ollams from '../assets/ollams.jpg'
import tofunmi from '../assets/tofunmi.jpg'
import josh from '../assets/Screenshot 2024-11-25 at 23.13.47.png'

import baller2 from '../assets/footballPic.jpg'
import baller3 from '../assets/footballPic2.jpg'
import tennis from '../assets/tennis1.jpg'
import pelumi from '../assets/oluwapelumi.jpg'
import babaella from '../assets/babaella.jpg'
import { motion } from 'framer-motion'
import { motionSettings } from '../hooks/FramerSettings'
// import footballvid from '../assets/vid-football.mp4'
// import footballvid2 from '../assets/vid-football-1.mov'

const images = [
  baller2,
  baller3,
  tennis,
  tofunmi,
  josh,
  ollams,
  pelumi,
  babaella,
]

export default function GetTogether() {
  return (
    <section className="py-20 bg-[#111111]">
      <motion.div {...motionSettings} className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          WSU Get2gether 8.0!
        </h2>
        <p className="text-xl text-gray-300 mb-8">Connect, Play, Have fun</p>
        <div className="bg-[#090909] w-fit p-8 md:px-10 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Event Details
          </h3>
          <p className="text-gray-300 mb-2">📅 December 21, 2024</p>
          <p className="text-gray-300 mb-2">🕒 11:00 am - end</p>
          <p className="text-gray-300 mb-6">📍 JJT park, Ikeja</p>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-6">
          Highlights from Previous Events
        </h3>
        <Marquee gradient={false} speed={40}>
          <div className="flex gap-4 m-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event highlight ${index + 1}`}
                className="h-48 w-72 object-cover rounded-lg"
              />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  )
}
