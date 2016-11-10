export default function(state = {}, action ){
    switch(action.type){
        case "BOOK_SELECTED":
            return action.payload;
            break;
    }
    return state;
}