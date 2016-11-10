//Step 2: Wiring the reducers with the Combine Reducers.

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SelectedBookReducer from './reducer_selected_book';

const allReducers = combineReducers({
    //key value pair should be the output
    books: BooksReducer,
    selectedBook :SelectedBookReducer
})

export default allReducers;
