"use client";
import { useState, useRef, useEffect } from "react";

const MultiSelectDropdown = ({ options, name, placeholder, selectedValues = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use controlled state from parent if provided, otherwise manage internally
  const selected = selectedValues;
  const setSelected = onChange || (() => {});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value) => {
    const newSelected = selected.includes(value) 
      ? selected.filter((v) => v !== value) 
      : [...selected, value];
    setSelected(newSelected);
  };

  const displayText =
    selected.length > 0 ? selected.join(", ") : placeholder;

  return (
    <div ref={dropdownRef} className="position-relative w-100">
      {/* Toggle input */}
      <div
        className="form-control glassmorphism-input d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          cursor: "pointer",
          backgroundColor: '#fafafa',
          border: '2px solid #eceff3',
          borderRadius: '8px',
          padding: '12px 15px',
          color: selected.length > 0 ? '#1e2247' : '#6c757d',
          fontSize: '0.95rem',
          minHeight: '48px'
        }}
      >
        <span style={{ 
          flex: 1,
          color: selected.length > 0 ? '#1e2247' : '#6c757d'
        }}>{displayText}</span>
        <span style={{ 
          color: '#6c757d',
          fontSize: '14px',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          display: 'inline-block'
        }}>▼</span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="border rounded bg-white mt-1 position-absolute w-100 shadow-sm"
          style={{ 
            zIndex: 10000, 
            maxHeight: "300px", 
            overflowY: "auto",
            border: '2px solid #eceff3',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px'
          }}
        >
          {options.map((opt) => {
            const isSelected = selected.includes(opt.value);
            return (
              <div
                key={opt.value}
                className="p-3"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  backgroundColor: isSelected ? "#fdc51a" : "transparent",
                  color: isSelected ? "#1e2247" : "#1e2247",
                  fontWeight: isSelected ? "600" : "normal",
                  transition: "background-color 0.2s ease",
                  borderBottom: "1px solid #f0f0f0"
                }}
                onClick={() => toggleOption(opt.value)}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "rgba(253, 197, 26, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}

      {/* Hidden inputs for form submit */}
      {selected.map((val) => (
        <input key={val} type="hidden" name={name} value={val} />
      ))}
    </div>
  );
};

export default MultiSelectDropdown;
