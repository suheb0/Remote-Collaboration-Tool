import React from "react";

function MeetingNameField({
  label,
  isInvalid,
  error,
  placeholder,
  value,
  setMeetingName,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setMeetingName(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          isInvalid ? "border-red-500" : ""
        }`}
      />
      {isInvalid && (
        <p className="text-red-500 text-xs italic mt-1">
          {error.join(", ")}
        </p>
      )}
    </div>
  );
}

export default MeetingNameField;
