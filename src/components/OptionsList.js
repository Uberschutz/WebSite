import React, {Component} from "react";
import '../styles/Parameters.css';

export class Option extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <input className="options-center" type="checkbox" checked={this.props.option.enabled} onChange={() => this.props.toggleOption(this.props.index)}/>{this.props.value}
            </div>
        );
    }
}

export default class OptionsList extends Component {
    render() {
        return (
            <div className={this.props.listClassName}>
                {
                    this.props.options.map((o, key) => {
                        return (
                            <Option className={this.props.optionClassName} index={key} key={key} option={o} toggleOption={this.props.toggleOption} value={this.props.translations[key]}/>
                        )
                    })
                }
            </div>
        );
    }
}