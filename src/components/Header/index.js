import React, { Component } from "react"


class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper left-align">
                        <span>Pet the dogs!</span>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><span>Dogs petted: 000 | </span></li>
                            <li><span>Dogs left to pet: 000</span></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header