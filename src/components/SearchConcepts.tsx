import { SearchInput } from "evergreen-ui";
import { useState, useEffect, ChangeEvent } from "react";
import { default as mockData } from "../MOCK_DATA.json";

const SearchConcepts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<
    { id: string; title: string; description: string }[]
  >([]);

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
      <SearchInput
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(event.target.value);
        }}
        width="80vw"
        placeholder="Search for a concept"
      />
      {data.map((dt, key) => {
        return <div key={key}>{dt.title}</div>;
      })}
    </>
  );
};

export default SearchConcepts;
