import React from "react";

export default function General(props) {
  return (
    <div className="section">
      <div className="heading">Personal Information</div>
      <input
        type="text"
        placeholder="First name"
        onChange={(e) => props.setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={(e) => props.setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => props.setAddress(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone number"
        onChange={(e) => props.setNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <textarea
        rows="5"
        maxLength="400"
        placeholder="Description"
        onChange={(e) => props.setDescription(e.target.value)}
      />
    </div>
  );
}
