import React, { Component } from "react";
import "./customcard.css";

class ClassProps extends Component {
    render() {
        const { name, email, button, url , onclikc} = this.props;

        return (
            <>
           
               <div className="card">
                <div className="user-card">
                <img src={url} alt="User Avatar" />
                <h2>{name}</h2>
                <p>{email}</p>
                <button onClick={onclikc}>{button}</button>
                </div>
            </div>
            </>
        );
    }
}

// ClassProps.defaultProps = {
//     name: "default name",
//     email: "default email",
//     button: "default button",
//     url: "https://via.placeholder.com/100"
// };

// ClassProps.prototype = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     button: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// };

export default ClassProps;






// import React, { Component } from "react";
// import "./customcard.css";

// class ClassProps extends Component {
//     render() {
        
//         return (
//             <>
//             <div className="cards">
//                <div className="user-card">
//                 <img src={this.props.url} alt="User Avatar" />
//                 <h2>{this.props.name}</h2>
//                 <p>{this.props.email}</p>
//                 <button>{this.props.button}</button>
//                 </div>
//             </div>
//             </>
//         );
//     }
// }