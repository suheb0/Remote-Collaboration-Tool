import React from "react";

function MeetingUserField({
  label,
  isInvalid,
  error,
  options,
  onChange,
  selectedOptions,
  singleSelection = false,
  isClearable,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        multiple={!singleSelection}
        value={selectedOptions.map((option) => option.value)}
        onChange={(e) => {
          const selected = Array.from(
            e.target.selectedOptions,
            (option) => ({
              value: option.value,
              label: option.text,
            })
          );
          onChange(singleSelection ? [selected[0]] : selected);
        }}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          isInvalid ? "border-red-500" : ""
        }`}
      >
        {isClearable && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isInvalid && (
        <p className="text-red-500 text-xs italic mt-1">
          {error.join(", ")}
        </p>
      )}
    </div>
  );
}

export default MeetingUserField;
