import { Link } from "react-router-dom";
import Concept from "../models/concept";
import Concepts from "./Concepts";
import SearchConcepts from "./SearchConcepts";
import Button from "@mui/material/Button";

const Home = () => {
  const concepts = [new Concept("React"), new Concept("Compile")];

  return (
    <>
      <div>
        <SearchConcepts />
      </div>
      <div>
        <Button>
          {" "}
          <Link to="/concepts/new">+ Explain Concept</Link>
        </Button>
      </div>
      <div>
        <Concepts concepts={concepts} />
      </div>
    </>
  );
};
export default Home;
