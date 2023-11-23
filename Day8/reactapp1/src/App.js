
import './App.css';
import Axiosdelete from './components/Axiosdelete';
import Axiosget from './components/Axiosget';
import Axiospost from './components/Axiospost';
import Axiosput from './components/Axiosput';

function App() {
  return (
    <div className="App">
      <Axiosget/>
      <Axiospost/>
      <Axiosput/>
      <Axiosdelete/>
      <db/>
    </div>
  );
}

export default App;