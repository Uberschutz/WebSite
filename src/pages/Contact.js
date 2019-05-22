import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Contact.css';

const content = require('../assets/text');

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr'
        }
    }

    componentDidMount() {
        this.setState({lang: this.props.lang});
        console.log(this.props.lang);
        console.log(content);
        console.log('here');
    }

    displayContent(content) {
        // return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
        return(content)
    }

    render() {
        let i = 0;
        return (
            <div className="form-align">
                <div> <br/>
                <h9 className="h9-font">
                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                </h9> <br/> <br/>
                    <div className="description-txt">
                        <h6 className="title-bold">
                            {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                        </h6>
                            <h7>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                            </h6>
                            <h7>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                            </h6>
                            <h7>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}<br/>
                                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.contact[i++])}
                            </h7> <br/>
                        <br/>
                    </div>
                </div>
                <Faq lang={this.props.lang} displayContent={this.displayContent.bind(this)}/>
                <Form lang={this.props.lang} displayContent={this.displayContent.bind(this)}/>
            </div>
        )
    }
}

class Faq extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let i = 0;
        return (
            <div className="form-align uber-color2">
                <h4 className="h9-font">
                    <br/>
                    {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                </h4>
                <div className="uber-color2 description-txt">
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h7> <br/><br/>
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h7> <br/><br/>
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7> ?
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h7> <br/><br/>
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">uberschutz_2021@labeip.epitech.eu</h7>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h7> <br/><br/>
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7> ?
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7>
                    </h7> <br/><br/>
                    <h6 className="question">
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h6>
                    <h7>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}.</h7> <br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<h7 className="address">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}</h7> <br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}<br/>
                        {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.faq[i++])}
                    </h7> <br/> <br/>
                </div>
            </div>
        )
    }
}

/*
Parler RGPD ??
 */



class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let i = 0;
        return (
            <div>
                <br/>
                <h9 className="h9-font">
                    {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}
                </h9><br/>
                <h11>
                    {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}
                </h11><br/>
                <h11>
                    {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}<h11 className="address">
                    uberschutz_2021@labeip.epitech.eu</h11>
                </h11>
                <form><br/>
                    <div className="form-group">
                        <div className="form-group form-align">
                            <label>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i])}</label>
                            <input type="text" className="form-control form-box" placeholder={this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}/>
                        </div>
                        <label>{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i])}</label>
                        <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder={this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}/>
                        <small id="emailHelp" className="form-text text-muted col-sm-9">
                            {this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}
                        </small>
                    </div><button type="submit" className="btn btn-primary button-footer">{this.props.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.form[i++])}</button>
                </form>
            </div>
        )
    }
}

export { Contact, Form, Faq };