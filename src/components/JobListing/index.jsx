import React, { Component } from 'react';
import JobCard from '../JobCard';

export default class JobListing extends Component {
  render() {
    const { jobs } = this.props;
    return jobs.map((job) => <JobCard key={job.companyname} {...job} />);
  }
}