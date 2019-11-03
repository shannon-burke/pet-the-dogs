import React from "react"
// import Dogs from "../../Dogs.json"
import "./style.css";


// state = {
//     Dogs,
//     currentScore: 0,
//     leftToWin: 9
// };

function ImageCard(props) {
    return (

        <div className="col s4 m4 l4">
            <img src={props.src} className="dog-image" alt={props.alt} onClick={() => props.clickFunction(props.id)} />
        </div>

    )
}

export default ImageCard;