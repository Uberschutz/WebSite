import React, { Component } from 'react';
import '../styles/bootstrap.css';
import Unauthorized from "./Unauthorized";

class Report extends Component {
    render() {
        if (this.props.logged) {
            let i = 0;
            return (
                <div>
                    <span>Hello report</span>
                </div>
            )
        } else {

            return (
                <div>
                    <Unauthorized/>
                </div>
            )
        }
    }
}

export default Report;