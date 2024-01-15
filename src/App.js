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
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
