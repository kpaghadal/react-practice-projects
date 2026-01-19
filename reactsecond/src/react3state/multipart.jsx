import React, { Component } from "react";
class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }
  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked={t4 === "male"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          />male
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked={t4 === "female"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          />female
          <br />
          <input
            type="text"
            value={t5}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t5: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t6}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t6: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>
          <input
            type="color"
            value={t7}
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <br />
          <input
            type="date"
            value={t8}
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <br />
          <textarea
            placeholder="about"
            value={t9}
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>
        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>
        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>
        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}
export default MultiPart;


/*
//create a class based component named display123
//create a state variable with 50 records
//implement pagination to show 5 records per page
//add a button to navigate to next and previous
//display current page number and total pages
//when user is in first page then disable previous button
//and when user is in last page disable next button

//state variable- records(array data type) then currentpage(number) and after that .reacordperpage(number), then totalpages(number) then displayRecordds(array)




import React, { Component } from "react";

class display123 extends Component {
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

        <span> Page {currentPage} of {totalPages} </span>

        <button onClick={this.nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }
}

export default display123;

 */
