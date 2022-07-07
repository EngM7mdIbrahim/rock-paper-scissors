import "./App.css";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Modal isOpen={isOpen} 
      onClose={()=>setModalOpen(!isOpen)}/>
      <button onClick={()=>setModalOpen(!isOpen)}>Show Modal</button>
    </div>
  );
}

export default App;
