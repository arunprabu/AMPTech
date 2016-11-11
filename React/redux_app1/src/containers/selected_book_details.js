import React, {Component} from "react";
import {connect} from "react-redux";

export class SelectedBookDetails extends Component{
    render(){
        if (!this.props.activeBook) {
            return (<div>Select a Book...</div>);
        }
        return (
            <div>
                <h1>{this.props.activeBook.title}</h1>
                <h5>Author: {this.props.activeBook.author}</h5>
                <h5>Published Year: {this.props.activeBook.published_year}</h5>
            </div>
        );
    }
    
}


function mapStateToProps(state){
    return{
        activeBook: state.selectedBook
    }
}

export default connect(mapStateToProps)(SelectedBookDetails)