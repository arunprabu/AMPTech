import React, {Component} from "react";
import {connect} from "react-redux";

export class SelectedBookDetails extends Component{
    render(){
        if (!this.props.activeBook) {
            return (<div>Select a Book...</div>);
        }
        return (
            <address>
                <strong>{this.props.activeBook.title}</strong><br/>
                Author: {this.props.activeBook.author}<br/>
                Published Year: {this.props.activeBook.published_year}<br/>
            </address>
        );
    }
}


function mapStateToProps(state){
    return{
        activeBook: state.selectedBook
    }
}

export default connect(mapStateToProps)(SelectedBookDetails)