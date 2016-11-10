export const selectBook = (book) => {
    console.log(`Selected Book is ${book.title} `);
    return { // the following is actually action.
        type: "BOOK_SELECTED",
        payload: book
    }
}