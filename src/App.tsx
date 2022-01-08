import { Route, Routes } from "react-router-dom";
import "./App.css";
import ConceptDetail from "./components/ConceptDetail";
import CreateConcept from "./components/CreateConcept";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts/new" element={<CreateConcept />} />
        <Route path="/concepts/:id" element={<ConceptDetail />} />
      </Routes>
    </>
  );
};

export default App;
