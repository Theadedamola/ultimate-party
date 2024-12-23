import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/Layer 5.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-[#111111] bg-opacity-95 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="" className="w-14" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('candidates')}
                className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Candidates
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Party
              </button>
              <button
                onClick={() => scrollToSection('visit')}
                className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Visit WSU
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('candidates')}
              className="text-gray-300 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Candidates
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Party
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-gray-300 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Visit WSU
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
