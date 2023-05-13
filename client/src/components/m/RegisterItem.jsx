import React from "react";
import { log } from "yarn/lib/cli";

const RegisterItem = ({ data }) => {
  console.log(data);
  return (
    <>
      {data === "radio" ? (
        <></>
      ) : (
        <>
          {" "}
          <h2>{}</h2>
          <input type="text" />
          <label htmlFor=""></label>
        </>
      )}
    </>
  );
};

export default RegisterItem;
