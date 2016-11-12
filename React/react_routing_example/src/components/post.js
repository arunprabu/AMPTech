import React, { Component } from "react";

import {browserHistory} from "react-router";

export default class Post extends Component{

	gotoHome(){
		browserHistory.push("/home")
	}

	render(){
	    return (
	        <div className="container">
		      <div className="starter-template">
		         <h3> This is post page </h3>
		         <p> Post Id: {this.props.params.id}</p>
		         <button onClick={this.gotoHome} className="btn btn-primary"> 
		         	Go Home 
		         </button>
		      </div>
			</div>
	    )
	}
}