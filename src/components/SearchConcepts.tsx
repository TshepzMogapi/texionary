import { useState, useEffect, ChangeEvent } from "react";
import { default as mockData } from "../MOCK_DATA.json";
import Input from "@mui/material/Input";

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
      <Input
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search for a concept"
      />
      <div
        style={{
          width: "80vw",
          border: "1px solid gray",
        }}
      >
        {data.map((dt, key) => {
          return (
            <div
              style={{
                border: "0px",
                height: "40px",
                margin: "8px",
                padding: "8px",
                fontSize: "24px",
                fontFamily: "sans-serif",
              }}
              key={key}
            >
              {dt.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchConcepts;
