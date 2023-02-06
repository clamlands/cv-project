import React, { Component } from "react";

export default class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { changeSchool, changeDeg, changeSchoolStart, changeSchoolEnd } =
      this.props;
    return (
      <div className="section">
        <div className="heading">Education</div>
        <input type="text" placeholder="School name" onChange={changeSchool} />
        <input type="text" placeholder="Degree" onChange={changeDeg} />
        <input
          type="text"
          placeholder="Start year"
          onChange={changeSchoolStart}
        />
        <input type="text" placeholder="End year" onChange={changeSchoolEnd} />
      </div>
    );
  }
}
