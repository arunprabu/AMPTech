import React, {Component} from "react";
import BookList from "../containers/book_list";
import SelectedBookDetails from "../containers/selected_book_details";

export default class App extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <BookList />
                </div>
                <div className="col-md-8">
                    <SelectedBookDetails />
                </div>
            </div>
        )
    }
}