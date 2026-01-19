import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",        // gender
      t5: "",        // city
      t6: [],        // branch (checkbox)
      t7: "#000000", // color
      t8: "",        // dob
      t9: "",        // about
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  onclickprevious = () => {
    this.setState({ index: this.state.index - 1 });
  };

  handleCheckbox = (e) => {
    const { value, checked } = e.target;
    this.setState((prev) => ({
      t6: checked
        ? [...prev.t6, value]
        : prev.t6.filter((item) => item !== value),
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;

    return (
      <div>
       
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part 1</h1>
          <input
            type="text"
            placeholder="First Name"
            value={t1}
            onChange={(e) => this.setState({ t1: e.target.value })}
          /><br />

          <input
            type="text"
            placeholder="Last Name"
            value={t2}
            onChange={(e) => this.setState({ t2: e.target.value })}
          /><br />

          <input
            type="text"
            placeholder="Mobile Number"
            value={t3}
            onChange={(e) => this.setState({ t3: e.target.value })}
          /><br />
        </div>

       
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part 2</h1>

          
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={t4 === "Male"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={t4 === "Female"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Female
          </label>
          <br />

         
          <select
            value={t5}
            onChange={(e) => this.setState({ t5: e.target.value })}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
          </select>
          <br />

          
          <label>
            <input
              type="checkbox"
              value="CE"
              checked={t6.includes("CE")}
              onChange={this.handleCheckbox}
            /> CSE
          </label>

          <label>
            <input
              type="checkbox"
              value="IT"
              checked={t6.includes("IT")}
              onChange={this.handleCheckbox}
            /> IT
          </label>

        </div>

        
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part 3</h1>

         
          <input
            type="color"
            value={t7}
            onChange={(e) => this.setState({ t7: e.target.value })}
          /><br />

          
          <input
            type="date"
            value={t8}
            onChange={(e) => this.setState({ t8: e.target.value })}
          /><br />

          
          <textarea
            placeholder="About"
            value={t9}
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
        </div>

        
        <button disabled={index === 2} onClick={this.onclicknext}>Next</button>
        <button disabled={index === 0} onClick={this.onclickprevious}>Previous</button>

        
        <hr />
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

export default Form ;
