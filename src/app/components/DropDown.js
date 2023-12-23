"use client";

// Dropdown.jsx
import React, { useState } from "react";
import styles from "@/app/styles/dropdown.module.css";

const Dropdown = ({ label, options, selectedOption, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${isOpen ? styles.hideLabel : styles.label}`}
        onClick={handleToggleDropdown}
      >
        {label}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
