import React from "react";

export default function Experience(props) {
  return (
    <div className="section">
      <div className="heading">Experience</div>
      <input
        type="text"
        placeholder="Job title"
        onChange={(e) => props.setJob(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        onChange={(e) => props.setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start year"
        onChange={(e) => props.setJobStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End year"
        onChange={(e) => props.setJobEnd(e.target.value)}
      />
    </div>
  );
}
