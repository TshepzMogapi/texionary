import { Route, Routes} from 'react-router-dom';
import './App.css';
import ConceptDetail from './components/ConceptDetail';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/concepts/:id" element={<ConceptDetail/>} />
    </Routes>
    </>
  );
}

export default App;
