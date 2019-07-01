import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Contact.css';

import {Icon} from 'antd';
import { displayContent } from '../utils/translationDisplay';


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
    }

    render() {
        let i = 0;
        return (
            <div className="form-align">
                <div> <br/>
                <h9 className="h9-font">
                    {displayContent(this.props.lang, i++, 'contact')}
                </h9> <br/> <br/>
                    <div className="description-txt">
                        <h6 className="title-bold">
                            {displayContent(this.props.lang, i++, 'contact')}
                        </h6>
                            <h7>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {displayContent(this.props.lang, i++, 'contact')}
                            </h6>
                            <h7>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {displayContent(this.props.lang, i++, 'contact')}
                            </h6>
                            <h7>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i++, 'contact')}<br/>
                                {displayContent(this.props.lang, i, 'contact')}
                            </h7> <br/>
                        <br/>
                    </div>
                </div>
                <Faq lang={this.props.lang}/>
                <Form lang={this.props.lang}/>
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
                    {displayContent(this.props.lang, i++,'faq')}
                </h4>
                <div className="uber-color2 description-txt">
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> ?
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<h7 className="address">uberschutz_2021@labeip.epitech.eu</h7>{displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> ?
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}.</h7> <br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> <br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i,'faq')}
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
                    {displayContent(this.props.lang, i++,'form')}
                </h9><br/>
                <h11>
                    {displayContent(this.props.lang, i++,'form')}
                </h11><br/>
                <h11>
                    {displayContent(this.props.lang, i++,'form')}<h11 className="address">
                    uberschutz_2021@labeip.epitech.eu</h11>
                </h11>
                <form><br/>
                    <div className="form-group">
                        <div className="form-group form-align">
                            <label>{displayContent(this.props.lang, i,'form')}</label>
                            <input type="text" className="form-control form-box" placeholder={displayContent(this.props.lang, i++,'form')}/>
                        </div>
                        <label>{displayContent(this.props.lang, i,'form')}</label>
                        <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder={displayContent(this.props.lang, i++,'form')}/>
                        <small id="emailHelp" className="form-text text-muted col-sm-9">
                            {displayContent(this.props.lang, i++,'form')}
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary button-footer">{displayContent(this.props.lang, i,'form')}</button>
                </form>
            </div>
        )
    }
}

export default Contact;