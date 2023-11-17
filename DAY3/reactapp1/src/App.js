
import './App.css';
import {useState} from "react";
import Props from "./components/Props";

function App() {
  const [name, setName]=useState("Divya");
  return (
    <div className="App">
      {/*<Stateprop/>*/}
      <Props name={name}/>
    </div>
  );
}

export default App;