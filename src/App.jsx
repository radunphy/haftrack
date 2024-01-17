import './App.css';
import { Hero, Footer, Navbar } from './components/common';
import { MortgageCalculator } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/services" element={<Hero />} />
          <Route path="/login" element={<Hero />} />  
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
