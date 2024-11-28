import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CandidateList from './components/CandidateList';
import GetTogether from './components/GetTogether';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import VisitSection from './components/VisitSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#090909]">
        <Navbar />
        <main>
          <Hero />
          <CandidateList />
          <AboutSection />
          <VisitSection />
          <GetTogether />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App