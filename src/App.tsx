import './App.css';
import Concepts from './components/Concepts';
import Concept from './models/concept';

function App() {
  const concepts = [new Concept('React'), new Concept('Compile')];
  return (
    <div>
      <Concepts concepts={concepts} />
    </div>
  );
}

export default App;
