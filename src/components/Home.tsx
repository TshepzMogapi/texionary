import { Link } from "react-router-dom";
import Concept from "../models/concept";
import Concepts from "./Concepts";
import { Button, Pane, majorScale } from "evergreen-ui";
import SearchConcepts from "./SearchConcepts";

const Home = () => {
  const concepts = [new Concept("React"), new Concept("Compile")];

  return (
    <>
      <Pane alignItems="center" marginX={majorScale(2)} clearfix>
        <SearchConcepts />
      </Pane>
      <Pane display="flex">
        <Button>
          {" "}
          <Link to="/concepts/new">+ Explain Concept</Link>
        </Button>
      </Pane>
      <div>
        <Concepts concepts={concepts} />
      </div>
    </>
  );
};
export default Home;
