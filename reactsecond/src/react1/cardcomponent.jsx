
import React, { Component} from "react";
import "./card.css";

class Cardcomponent extends Component {
    render() {
        return (
            <>
                <div className="user-card">
                    <img src = "https://media.licdn.com/dms/image/v2/D4D12AQF86CmNITr02A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716463472440?e=2147483647&v=beta&t=gjRDdQL59JuKS8tvcxLi9yt6UQEn2ug8wcxnFLi3ayQ"/>
                    <h2>kris paghadal</h2>
                    <button>Follow</button>
                    <p>press the button</p>
                </div>
                
            </>
        );
    }

}

export default Cardcomponent;