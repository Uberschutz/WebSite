import React, {Component} from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import '../styles/Parameters.css';

export class Option extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <FormControlLabel
                    value="bottom"
                    control={<Switch color="primary" checked={this.props.option.enabled} className="options-center" onChange={() => this.props.toggleOption(this.props.index)}/>}
                    label={this.props.value}
                    labelPlacement="top"
                />
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