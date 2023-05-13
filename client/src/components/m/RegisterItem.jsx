import React from "react";

const RegisterItem = ({ data }) => {
  const { id, title, type, label, options } = data;

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      {type === "text" || type === "password" ? (
        <input type={type} id={id} name={id} onChange={handleChange} />
      ) : (
        options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={id}
              value={option.value}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))
      )}
    </div>
  );
};

export default RegisterItem;
