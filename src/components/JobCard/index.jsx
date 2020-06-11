import React, { Component } from "react";
import { Button, Card } from "antd";
import "./style.css";

export default class JobCards extends Component {
  render() {
    const {
      title,
      companyName,
      location,
      experience,
      skills,
      logo,
      type
    } = this.props;
    return (
      <Card style={{ marginBottom: "20px" }}>
        <div className="card-container">
          <div className="card-logo">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="card-info">
            <div className="card-title">{title}</div>
            <div>
              <div>{companyName}</div>
              <div>{location}</div>
              <div>{experience}</div>
              <div>{type}</div>
            </div>
            <div>
              {skills.map((skill, index) =>
                index !== skills.length - 1 ? `${skill.name}, ` : skill.name
              )}
            </div>
          </div>
          <div className="apply-container">
            <Button type="primary">Apply</Button>
          </div>
        </div>
      </Card>
    );
  }
}
