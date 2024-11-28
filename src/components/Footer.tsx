import logo from '../assets/Layer 5.png'

export default function Footer() {
  return (
    <footer className="bg-[#090909] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className='flex items-center justify-start'>
              <img src={logo} alt="" className="w-24" />
              <h3 className="text-white text-lg font-semibold mb-4">WSU</h3>
            </div>
            <p className="text-sm max-w-96">
              Bringing you comprehensive football coverage and analysis from
              every corner of the globe.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#candidates" className="hover:text-green-600">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-600">
                  About WSU
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-green-600">
                  Join Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 World Soccer Updates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
