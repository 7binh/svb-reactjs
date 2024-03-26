import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${
        props.styled === "primary"
          ? "bg-primary text-white"
          : "text-primary bg-darkColor"
      } w-48 rounded-md font-medium mx-auto py-3 ${props.className}`}
    >
      {props.content}
    </button>
  );
};

export default Button;
