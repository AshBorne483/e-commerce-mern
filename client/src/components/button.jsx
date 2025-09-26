import React, { useState } from "react";

const Button = ({ Label, onClick, isActive }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-xl text-center px-4 py-1 w-full h-full rounded-full ${
          isActive
            ? "bg-primary text-primary-fg"
            : "bg-secondary text-secondary-fg"
        }`}
      >
        {Label}
      </button>
    </div>
  );
};

export default Button;
