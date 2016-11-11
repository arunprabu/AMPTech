// Step 3: Create a Book List Component and export it

import React, {Component} from "react";
// Import connect from react-redux;
import {connect} from "react-redux";

//for listening to action
import {bindActionCreators} from "redux";
import {selectBook} from "../actions";

class BookList extends Component{
    //Step 5: Build List Item
    buildList() {
         return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.id} onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    //skeleton
    /* buildList(){
        return(
            <li>List 1</li>
            <li>List 2</li>
        )
    } */

    // Step 4: Build ul element and render it
    render(){
        return(
            <ul className="list-group">
                {this.buildList()}
            </ul>
        )
    }
}

// We have data in redux, view in react, to connect them we need a package 'react-redux';


 /* For JUST CREATING LIST, WITHOUT ACTION */
function mapStateToProps(state){
    return{
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
