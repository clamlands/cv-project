import React from "react";

export default function Education(props) {
  return (
    <div className="section">
      <div className="heading">Education</div>
      <input
        type="text"
        placeholder="School name"
        onChange={(e) => props.setSchool(e.target.value)}
      />
      <input
        type="text"
        placeholder="Degree"
        onChange={(e) => props.setDegree(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start year"
        onChange={(e) => props.setSchoolStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End year"
        onChange={(e) => props.setSchoolEnd(e.target.value)}
      />
    </div>
  );
}
