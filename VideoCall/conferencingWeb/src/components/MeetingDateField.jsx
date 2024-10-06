import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function MeetingDateField({
  selected,
  setStartDate,
} ) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Set Meeting Date
      </label>
      <DatePicker
        selected={selected.toDate()}
        onChange={(date) => setStartDate(moment(date))}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}

export default MeetingDateField;
