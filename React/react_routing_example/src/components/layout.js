//Step 5
import  React, {Component} from "react";

//import BookList from "../containers/book_list"

//import SelectedBookDetails from "../containers/selected_book_details"


// export default class App extends Component{

// 	render(){
// 		return (
// 		   <div>
// 		     <BookList />
// 		     <SelectedBookDetails />
// 		   </div>	
// 		)
// 	}
// }

import Header from "./header";
// import Home from "./home"
// import Post from "./post"


export default class Layout extends Component{

	render(){
		return (
			<div>
      				<Header />
      				{this.props.children}
      		</div>

		)
	}
}