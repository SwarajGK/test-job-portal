import React, { Component } from "react";
import { Button, Card, Modal, Input, message } from "antd";
import { UserOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";
import "./style.css";

export default class JobCards extends Component {
  state = {
    visible: false,
    name: "",
    email: "",
    mobile: "",
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
    message.success('Thank you for applying, we will get back to you soon...');
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onNameChange = (e) => this.setState({ name: e.target.value });

  onEmailChange = (e) => this.setState({ name: e.target.value });

  onPhoneChange = (e) => this.setState({ name: e.target.value });

  showPopup = () => this.setState({ visible: true });

  render() {
    const {
      title,
      companyName,
      location,
      experience,
      skills,
      logo,
      type,
    } = this.props;
    const { name, email, mobile } = this.state;
    return (
      <>
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
              <Button type="primary" onClick={this.showPopup}>
                Apply
              </Button>
            </div>
          </div>
        </Card>
        <Modal
          title="Apply here"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Name"
            value={name}
            onChange={this.onNameChange}
            className="input"
          />
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            value={email}
            onChange={this.onEmailChange}
            className="input"
          />
          <Input
            prefix={<MobileOutlined />}
            placeholder="Mobile"
            value={mobile}
            onChange={this.onPhoneChange}
            className="input"
          />
        </Modal>
      </>
    );
  }
}
