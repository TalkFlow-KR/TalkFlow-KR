import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const test = async () => {
      const res = await axios.get("/room/1");
      if (!res) console.log("error");
      console.log(res);
    };
  }, []);
  const onChange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };
  const onClick = async () => {
    const res = await axios.get("/room/1");
    console.log(res);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색창"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>button</button>
    </div>
  );
};

export default Search;
