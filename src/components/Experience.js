import React, { Component } from "react";

export default class Experience extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { changeJob, changeComp, changeJobStart, changeJobEnd } = this.props;
    return (
      <div className="section">
        <div className="heading">Experience</div>
        <input type="text" placeholder="Job title" onChange={changeJob} />
        <input type="text" placeholder="Company" onChange={changeComp} />
        <input type="text" placeholder="Start year" onChange={changeJobStart} />
        <input type="text" placeholder="End year" onChange={changeJobEnd} />
      </div>
    );
  }
}
