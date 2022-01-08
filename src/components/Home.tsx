import { Link } from "react-router-dom";
import Concept from "../models/concept";
import Concepts from "./Concepts";
import { Button, Pane, majorScale, TextInput, SearchInput } from "evergreen-ui";

const Home = () => {
  const concepts = [new Concept("React"), new Concept("Compile")];

  return (
    <>
      <Pane alignItems="center" marginX={majorScale(2)} clearfix display="flex">
        <Pane display="flex" flex={1}>
          <SearchInput width="80vw" placeholder="Search for a concept" />
        </Pane>
        <Pane display="flex">
          <Button>
            {" "}
            <Link to="/concepts/new">+ Explain Concept</Link>
          </Button>
        </Pane>
      </Pane>
      <div>
        <Concepts concepts={concepts} />
      </div>
    </>
  );
};
export default Home;
