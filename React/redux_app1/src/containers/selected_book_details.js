import React, {Component} from "react";
import {connect} from "react-redux";

export class SelectedBookDetails extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.selectedBook}</h1>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        activeBook: state.selectedBook
    }
}

export default connect(mapStateToProps)(SelectedBookDetails)