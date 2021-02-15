import './App.css';
import { Navbar } from './components/layout/Navbar';
import { SB1 } from './components/pages/SB1';

// Bring in Provider
import { SB1Provider } from './context/sb1/SB1State';

function App() {
  return (
    <SB1Provider>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <SB1 />
        </div>
      </div>
    </SB1Provider>
  );
}

export default App;
