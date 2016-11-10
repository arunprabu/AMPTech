import React, {Component} from "react";
import BookList from "../containers/book_list";
import SelectedBookDetails from "../containers/selected_book_details";

export default class App extends Component{
    render(){
        return(
            <div>
                <BookList />
                <SelectedBookDetails />
            </div>
        )
    }
}