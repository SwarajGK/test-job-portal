import React, { Component } from "react";
import cloneDeep from "clone-deep";
import { Row, Col, Input, Checkbox } from "antd";
import { jobList, jobTypeListing } from "../../utils/mockData";
import JobListing from "../JobListing";
import "./style.css";

const { Search } = Input;

export default class JobPortal extends Component {
  state = {
    jobListing: [],
    textFilter: "",
    jobType: [],
  };

  componentDidMount() {
    this.setState({ jobListing: jobList });
  }

  onTypeChange = (checkedValues) => {
    this.setState({
      jobType: checkedValues,
    });
  };

  onSearch = (value) => {
    this.setState({ textFilter: value });
  };

  getFilterJobs = () => {
    const { jobListing, textFilter, jobType } = this.state;
    let clonedList = cloneDeep(jobListing);
    if (textFilter) {
      clonedList = clonedList.filter((job) =>
        job.title.toLowerCase().includes(textFilter.toLowerCase())
      );
    }
    if (jobType.length) {
      clonedList = clonedList.filter((job) =>
        jobType.includes(job.type)
      );
    }
    return clonedList;
  };

  render() {
    const filterdJobs = this.getFilterJobs();
    return (
      <div>
        <Row align="middle" justify="center" className="search-container">
          <Col span={7}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={this.onSearch}
            />
          </Col>
          <Col span={7}>
            <Checkbox.Group
              options={jobTypeListing}
              onChange={this.onTypeChange}
              className="job-type-container"
            />
          </Col>
        </Row>
        <Row align="center">
          <Col span={14}>
            <JobListing jobs={filterdJobs} />
          </Col>
        </Row>
      </div>
    );
  }
}
