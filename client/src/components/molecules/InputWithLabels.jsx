import React, { memo } from "react";

const InputWithLabels = memo(({ data, value, onChange, ...rest }) => {
  console.log(data);
  // console.log("prpps", props);
  // const { label, placeholder, type, value, onChange, ...rest } = data;
  if (data.male && data.female) {
    return (
      <>
        <label>
          {data.label}
          <br />
          <input
            type={data.male.type}
            id={data.male.id}
            name={data.male.name}
            value={data.male.value}
            onChange={onChange}
            checked={value === data.male.value}
            {...rest}
          />
          {data.male.label}
          <br />
          <input
            type={data.female.type}
            id={data.female.id}
            name={data.female.name}
            value={data.female.value}
            onChange={onChange}
            checked={value === data.female.value}
            {...rest}
          />
          {data.female.label}
        </label>
      </>
    );
  }

  return (
    <>
      <label htmlFor="">
        {data.label}
        <br />
        <input
          type={data.type}
          placeholder={data.placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </>
  );
});

export default InputWithLabels;
