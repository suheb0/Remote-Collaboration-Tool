import React from "react";

function MeetingMaximumUsersField({
  value,
  setSize,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Maximum People
      </label>
      <input
        type="number"
        min={1}
        max={50}
        placeholder="Maximum People"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (!inputValue.length || parseInt(inputValue) === 0) {
            setSize(1);
          } else if (parseInt(inputValue) > 50) {
            setSize(50);
          } else {
            setSize(parseInt(inputValue));
          }
        }}
      />
    </div>
  );
}

export default MeetingMaximumUsersField;
