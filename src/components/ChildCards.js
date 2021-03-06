import React, {Component} from "react";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardFooter from "reactstrap/lib/CardFooter";
import CardText from "reactstrap/lib/CardText";
import CardTitle from "reactstrap/lib/CardTitle";
import Icon from "antd/lib/icon/index";

export class DisplayChildrenCard extends Component {

	constructor(props) {
		super(props);

		this.editChildren = this.editChildren.bind(this);
		this.deleteChildren = this.deleteChildren.bind(this);
	}


	editChildren() {
		this.props.editChildren(this.props.child);
	}

	deleteChildren() {
		this.props.deleteChildren(this.props.child)
	}

	render() {
		return (
			<Card body inverse className="child-card">
				<CardTitle>{this.props.title} : {this.props.child.name}</CardTitle>
				<CardText>Age : {this.props.child.age}</CardText>
				<CardFooter>
					<Button className="btn-mod btn btn-danger" onClick={this.deleteChildren}>
						{this.props.delete} <Icon type="delete" className="size-icon"/>
					</Button>
					<Button className="btn-mod btn btn-success" onClick={this.editChildren}>
						{this.props.edit} <Icon type="edit" className="size-icon" />
					</Button>
				</CardFooter>
			</Card>
		);
	}

}

export default class DisplayChildrenList extends Component {
	render() {
		return (
			this.props.childrens.map((child, index) => {
				return (
					<DisplayChildrenCard
						key={index}
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