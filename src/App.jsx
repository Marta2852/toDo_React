import './App.css'
import ToDo from "./ToDo";

function App() {
  return (
    <>
      <ToDo
        task="Iemācīties React"
        completed={false}  
      />
    </>
  )
}

export default App;
