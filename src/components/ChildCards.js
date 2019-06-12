import React, {Component} from "react";
import {Button, Card, CardFooter, CardText, CardTitle} from "reactstrap";
import {Icon} from "antd";

export class DisplayChildrenCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Card body inverse className="child-card">
				<CardTitle>{this.props.title} : {this.props.child.name}</CardTitle>
				<CardText>Age : {this.props.child.age}</CardText>
				<CardFooter>
					<Button className="btn-mod btn btn-danger" onClick={() => this.props.deleteChildren(this.props.child)}>
						{this.props.delete} <Icon type="delete" className="size-icon"/>
					</Button>
					<Button className="btn-mod btn btn-success" onClick={() => this.props.editChildren(this.props.child)}>
						{this.props.edit} <Icon type="edit" className="size-icon" />
					</Button>
				</CardFooter>
			</Card>
		);
	}

}

export default class DisplayChildrenList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			this.props.childrens.map((child, index) => {
				return (
					<DisplayChildrenCard
						title={this.props.title}
						child={child}
						delete={this.props.delete}
						edit={this.props.edit}
						deleteChildren={this.props.deleteChildren}
						editChildren={this.props.editChildren}
					/>
				);
			})
		);
	}
}