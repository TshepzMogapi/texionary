import { Link } from "react-router-dom";
import Concept from "../models/concept";
import Concepts from "./Concepts";
import { Button, Pane, majorScale, TextInput } from "evergreen-ui";

const Home = () => {
  const concepts = [new Concept("React"), new Concept("Compile")];

  return (
    <>
      <Pane alignItems="center" marginX={majorScale(2)} clearfix display="flex">
        <Pane display="flex" flex={1}>
          <TextInput
            width="80vw"
            name="text-input-name"
            placeholder="Search for a concept"
          />
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
