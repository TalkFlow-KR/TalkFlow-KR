import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {};
  return (
    <div>
      <input
        type="text"
        placeholder="검색창"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}></button>
    </div>
  );
};

export default Search;
