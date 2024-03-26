import React from "react";

const Input = (props) => {
  return (
    <input
      type={`${props.type}`}
      placeholder={`${props.placeholder}`}
      className={`p-3 rounded-lg text-gray-900 text-base ${props.className}`}
    />
  );
};

export default Input;
