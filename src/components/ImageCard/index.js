import React, { Component } from "react"
// import Dogs from "../../Dogs.json"
import "./style.css";

class ImageCard extends Component {
    // state = {
    //     Dogs,
    //     currentScore: 0,
    //     leftToWin: 9
    // };

    render(props) {
        return (

            <div className="col s4 m4 l4">
                <img src={this.props.src} className="dog-image" alt={this.props.alt} onClick={() => this.props.clickFunction(this.props.id)} />
            </div>

        )
    }
}
export default ImageCard;