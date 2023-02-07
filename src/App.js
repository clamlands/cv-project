import React, { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Result from "./components/Result";
import "./style.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStart, setSchoolStart] = useState("");
  const [schoolEnd, setSchoolEnd] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");

  return (
    <div className="page-container">
      <div className="page-header">CV Creator</div>
      <div className="main">
        <div className="left">
          <General
            setFirstName={setFirstName}
            setLastName={setLastName}
            setTitle={setTitle}
            setAddress={setAddress}
            setEmail={setEmail}
            setNumber={setNumber}
            setDescription={setDescription}
          />
          <Education
            setSchool={setSchool}
            setDegree={setDegree}
            setSchoolStart={setSchoolStart}
            setSchoolEnd={setSchoolEnd}
          />
          <Experience
            setJob={setJob}
            setCompany={setCompany}
            setJobStart={setJobStart}
            setJobEnd={setJobEnd}
          />
        </div>
        <div className="right">
          <Result
            firstName={firstName}
            lastName={lastName}
            title={title}
            address={address}
            email={email}
            number={number}
            description={description}
            school={school}
            degree={degree}
            schoolStart={schoolStart}
            schoolEnd={schoolEnd}
            job={job}
            company={company}
            jobStart={jobStart}
            jobEnd={jobEnd}
          />
        </div>
      </div>
    </div>
  );
}
