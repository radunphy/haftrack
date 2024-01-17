import './App.css';
import { Header, Footer, Navbar } from './components/common';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <main className="App-main">
        <Header />
        <p>Test</p> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
