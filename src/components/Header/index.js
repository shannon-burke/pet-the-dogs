import React, { Component } from "react"


class Header extends Component {
    render(props) {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper left-align">
                        <span>Pet the dogs!</span>
                        <ul id="nav-collapse-section" className="right hide-on-med-and-down">
                            <li><span>Dogs petted: {props.currentScore} | </span></li>
                            <li><span>Dogs left to pet: {props.leftToWin} </span></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header