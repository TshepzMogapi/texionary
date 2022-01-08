import { Link } from "react-router-dom";
import Concept from "../models/concept";
import Concepts from "./Concepts";
import { Button, Pane, majorScale, SearchInput } from "evergreen-ui";
import { useState, useEffect } from "react";
import { default as mockData } from "../MOCK_DATA.json";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<
    { id: string; title: string; description: string }[]
  >([]);
  const concepts = [new Concept("React"), new Concept("Compile")];

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setData(
        mockData.filter((dt) =>
          dt.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setData([]);
    }
  }, [searchTerm]);

  return (
    <>
      <Pane alignItems="center" marginX={majorScale(2)} clearfix>
        <SearchInput
          onChange={(event: any) => {
            setSearchTerm(event.target.value);
          }}
          width="80vw"
          placeholder="Search for a concept"
        />
        {data.map((dt, key) => {
          return <div key={key}>{dt.title}</div>;
        })}
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
