
import './App.css';
import Axiosget from './components/Axiosget';
import Axiospost from './components/Axiospost';

function App() {
  return (
    <div className="App">
      <Axiosget/>
      <Axiospost/>
      <db/>
    </div>
  );
}

export default App;