//Step 3 : creat a booklist component

import React, { Component } from "react";

import {Link} from "react-router";



//     //step 4: Build element and render
//     render(){
//     	return (
//     		<ul>
//     			<li>Book  1</li>
//     			<li>Book  2</li>
//     			<li>Book  3</li>
//     		</ul>
//     	)
//     }
// }


export default class Header extends Component{

    render(){
        return (
           <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <img src={'../style/images/apple-logo.jpg'} alt="boohoo" className="img-responsive"/>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to={"/home"} activeStyle={{color: "red"}}> Home </Link>
                    </li>
                    <li>
                        <Link to={"/post"} activeClassName={"active"}> Post </Link>
                    </li>
                  </ul>
                </div> 
            </div>
           </nav>
        )
    }
}