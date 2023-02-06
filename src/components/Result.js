import React, { Component } from "react";

export default class Result extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const {
      firstName,
      lastName,
      title,
      address,
      email,
      number,
      description,
      school,
      degree,
      schoolStart,
      schoolEnd,
      job,
      company,
      jobStart,
      jobEnd,
    } = this.props;
    return (
      <div>
        <div className="header">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div>{title}</div>
        </div>
        <div className="results">
          <div className="results-section">
            <div className="heading">Personal Details</div>
            <div>
              <b>Address: </b>
              {address}
            </div>
            <div>
              <b>Phone number: </b>
              {number}
            </div>
            <div>
              <b>Email: </b>
              {email}
            </div>
          </div>
          <div className="results-section">
            <div className="heading">Description</div>
            <div>{description}</div>
          </div>
          <div className="results-section">
            <div className="heading">Education</div>
            <div>
              <b>Univesrity: </b>
              {school}
            </div>
            <div>
              <b>Degree: </b>
              {degree}
            </div>
            <div>
              <em>
                {schoolStart} - {schoolEnd}
              </em>
            </div>
          </div>
          <div className="results-section">
            <div className="heading">Experience</div>
            <div>
              <b>Job title: </b>
              {job}
            </div>
            <div>
              <b>Company: </b>
              {company}
            </div>
            <div>
              <em>
                {jobStart} - {jobEnd}
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
