
	> npm install
	> npm start

Step 0: Application state should be ->  Books: [{}, {}, {}] - to do that follow the step 1 and step 2.

Step 1: Create an array of objects and return it in reducers for Books [{}, {}, {}] in --> reducers/reducer_books.js AND export it.

Step 2: Wiring the reducer with all the other reducers in order to create single data store so that it can be used by the Application.
		Find the code --> in reducers/index.js

		Now, We have the single data store in redux. Let's create component now.

Step 3: Create a Book List Component and export it. --> components/book_list.js
		Note: Now, We have data/state in redux, view in react. To connect them we need a package 'react-redux'.

Step 4: Pass on the data from Reducer to the Component. Follow Step 5.

Step 5: Now, we need to make the component as smart component to have the data associated with it. Smart component is a.k.a as container. 
		Container will have direct connection with the data/state in redux. 
		To Create Smart Component go to step 6.

Step 6: Create a folder 'containers' and cut and move the 'components/book_list.js' component inside it. Implement Container class.

Step 7: Now, IMPORT the container/book_list into components/app.js --> ref components/app.js to connect container with the component.

Step 8: Make container/book_list.js as smart component. Have a function mapStateToProps(state){}
		Syntax is here: 
		function mapStateToProps(state){
			return{
				//syntax is, props: props_value
				books: state.books
			}
		}

		Before that, import {connect} from "react-redux"; and then,
		-> Remove the export default from the class.
		-> Now, 
			export default connect(mapStateToProps)(BookList)    -- Syntax: connect(mapStateToProps)(SmartComponent)

		Note: Whatever that this smart component returns will be available as props in containers/book_list.js

Step 9: One final datastore related trick to be done to make the data available from store.
		Open up, index.js
			import allReducers from "./reducers";
			import {createStore} from "redux";
			import {Provider} from "react-redux";

		Now, create a store out of allReducers
			const store = createStore(allReducers);

		Finally, add <provider> details in ReactDOM.render()
			ReactDOM.render(
				<Provider store={store}>
					<App />
				</Provider>,
				document.getElementById('root')
			);

Step 10: Now, loop thru the list of books data available as props in container/book_list.js.
		
		have update the buildList()
		
		buildList(){
			return this.props.books.map((book) => {
				return (
					<li key={book.id}>
						{book.title}
					</li>
				);
			});
		} 

Now, see your list built.

Step 11: Let's now listen to Events. So, create Actions.
		 Create a new folder called actions/index.js
		 	export const selectBook = (book) => {
				 console.log(`Selected Book is ${book.title} );
			}
		
		actions are actually will be with two properties. 1. type 2. payload
		so, 

			export const selectBook = (book) => {
				console.log(`Selected Book is ${book.title} `);
				return { // the following is actually action.
					type: "BOOK_SELECTED",
					payload: book
				}
			}

		Note: The function selectBook is action creator. It will just an action. 

Step 12: Goto containers/book_list.js and 
			import {bindActionCreators} from "redux";
			import {selectBook} from "../actions";

		Now, in the same smart component,
		    function mapDispatchToProps(dispatch){
				return bindActionCreators({ selectBook: selectBook }, dispatch)
			}
		
		and then,
			export default connect(mapStateToProps, mapDispatchToProps)(BookList)