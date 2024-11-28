import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';
import { motionSettings } from '../hooks/FramerSettings';

export default function CandidateList() {
  return (
    <section id="candidates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          The Ultimate Team
        </h2>
        <motion.div {...motionSettings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-[#111111] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {candidate.name}
                </h3>
                <p className="text-green-600 mb-4">{candidate.position}</p>
                <p className="text-gray-300 mb-6">{candidate.reason}</p>
                {/* <a
                  href={candidate.votingLink}
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Vote Now
                </a> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}