import React from "react";

export class Question2q1 extends React.Component {
  firstName = "Nguyen Van";
  lastName = "A";

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  render() {
    return (
      <div style={{ border: "1px solid #707070", padding: 5 }}>
        <h3>Full Name: {this.getFullName()}</h3>
        <p>Age: 25</p>
        <p>(class component)</p>
      </div>
    );
  }
}

export function Question2q1Function() {
  const firstName = "Nguyen Van";
  const lastName = "A";

  function getFullName() {
    return `${firstName} ${lastName}`;
  }
  return (
    <div style={{ border: "1px solid #707070", padding: 5 }}>
      <h3>Full Name: {getFullName()}</h3>
      <p>Age: 25</p>
      <p>(functional component)</p>
    </div>
  );
}
