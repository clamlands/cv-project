import React, { Component } from "react";

export default class General extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const {
      changeFirst,
      changeLast,
      changeTitle,
      changeAdd,
      changeEmail,
      changeNum,
      changeDesc,
    } = this.props;
    return (
      <div className="section">
        <div className="heading">Personal Information</div>
        <input type="text" placeholder="First name" onChange={changeFirst} />
        <input type="text" placeholder="Last name" onChange={changeLast} />
        <input type="text" placeholder="Title" onChange={changeTitle} />
        <input type="text" placeholder="Address" onChange={changeAdd} />
        <input type="email" placeholder="Email" onChange={changeEmail} />
        <input type="tel" placeholder="Phone number" onChange={changeNum} />
        <textarea
          rows="5"
          maxLength="400"
          placeholder="Description"
          onChange={changeDesc}
        />
      </div>
    );
  }
}
