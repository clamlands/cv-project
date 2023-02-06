import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Result from "./components/Result";
import "./style.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      email: "",
      number: "",
      description: "",
      school: "",
      degree: "",
      schoolStart: "",
      schoolEnd: "",
      job: "",
      company: "",
      jobStart: "",
      jobEnd: "",
    };
  }

  changeFirst = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  changeLast = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  changeAdd = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changeNum = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  changeDesc = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  changeSchool = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  changeDeg = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  changeSchoolStart = (e) => {
    this.setState({
      schoolStart: e.target.value,
    });
  };

  changeSchoolEnd = (e) => {
    this.setState({
      schoolEnd: e.target.value,
    });
  };

  changeJob = (e) => {
    this.setState({
      job: e.target.value,
    });
  };

  changeComp = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  changeJobStart = (e) => {
    this.setState({
      jobStart: e.target.value,
    });
  };

  changeJobEnd = (e) => {
    this.setState({
      jobEnd: e.target.value,
    });
  };

  render() {
    return (
      <div className="page-container">
        <div className="page-header">CV Creator</div>
        <div className="main">
          <div className="left">
            <General
              changeFirst={this.changeFirst}
              changeLast={this.changeLast}
              changeTitle={this.changeTitle}
              changeAdd={this.changeAdd}
              changeEmail={this.changeEmail}
              changeNum={this.changeNum}
              changeDesc={this.changeDesc}
            />
            <Education
              changeSchool={this.changeSchool}
              changeDeg={this.changeDeg}
              changeSchoolStart={this.changeSchoolStart}
              changeSchoolEnd={this.changeSchoolEnd}
            />
            <Experience
              changeJob={this.changeJob}
              changeComp={this.changeComp}
              changeJobStart={this.changeJobStart}
              changeJobEnd={this.changeJobEnd}
            />
          </div>
          <div className="right">
            <Result
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              title={this.state.title}
              address={this.state.address}
              email={this.state.email}
              number={this.state.number}
              description={this.state.description}
              school={this.state.school}
              degree={this.state.degree}
              schoolStart={this.state.schoolStart}
              schoolEnd={this.state.schoolEnd}
              job={this.state.job}
              company={this.state.company}
              jobStart={this.state.jobStart}
              jobEnd={this.state.jobEnd}
            />
          </div>
        </div>
      </div>
    );
  }
}
