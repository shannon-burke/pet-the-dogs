import React, { Component } from "react"


class ImageCard extends Component {
    render(props) {
        return (
            <div>
                <div class="col s12 m4">
                    <div class="card-panel">
                        <img src={props.src} className="dog-image" alt={props.alt} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ImageCard;