import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Opportunities } from './pages/Opportunities'
import { Research } from './pages/Research'
import { Contact } from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
