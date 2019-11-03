import React, { Component } from "react"
// import Dogs from "../../Dogs.json"

class ImageCard extends Component {
    // state = {
    //     Dogs,
    //     currentScore: 0,
    //     leftToWin: 9
    // };

    render(props) {
        return (
            <div>
                <div class="col s12 m4">
                    <div class="card-panel">
                        <img src={this.props.src} className="dog-image" alt={this.props.alt} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ImageCard;