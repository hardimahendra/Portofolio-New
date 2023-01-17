import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
// import { Contacts } from './pages/Contacts';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <>
    <div className="body">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
    </div>
    </>
  );
}

export default App;