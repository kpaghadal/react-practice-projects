import React, { Component } from "react";

class Display123 extends Component {
  constructor() {
    super();

    this.state = {
      records: Array.from({ length: 50 }, (_, i) => `Record ${i + 1}`),
      currentPage: 1,
      recordsPerPage: 5
    };
  }

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  prevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    const { records, currentPage, recordsPerPage } = this.state;

    const totalPages = Math.ceil(records.length / recordsPerPage);
    const start = (currentPage - 1) * recordsPerPage;
    const displayRecords = records.slice(start, start + recordsPerPage);

    return (
      <div>
        <h3>Pagination</h3>

        <ul>
          {displayRecords.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <button onClick={this.prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        <span>  {currentPage} / {totalPages} </span>

        <button onClick={this.nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }
}

export default Display123;
