import React from "react";

export default function Result(props) {
  return (
    <div>
      <div className="header">
        <div className="name">
          {props.firstName} {props.lastName}
        </div>
        <div>{props.title}</div>
      </div>
      <div className="results">
        <div className="results-section">
          <div className="heading">Personal Details</div>
          <div>
            <b>Address: </b>
            {props.address}
          </div>
          <div>
            <b>Phone number: </b>
            {props.number}
          </div>
          <div>
            <b>Email: </b>
            {props.email}
          </div>
        </div>
        <div className="results-section">
          <div className="heading">Description</div>
          <div>{props.description}</div>
        </div>
        <div className="results-section">
          <div className="heading">Education</div>
          <div>
            <b>Univesrity: </b>
            {props.school}
          </div>
          <div>
            <b>Degree: </b>
            {props.degree}
          </div>
          <div>
            <em>
              {props.schoolStart} - {props.schoolEnd}
            </em>
          </div>
        </div>
        <div className="results-section">
          <div className="heading">Experience</div>
          <div>
            <b>Job title: </b>
            {props.job}
          </div>
          <div>
            <b>Company: </b>
            {props.company}
          </div>
          <div>
            <em>
              {props.jobStart} - {props.jobEnd}
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}
