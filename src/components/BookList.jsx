/* TODO - add your code to create a functional React component that displays
 all of the available books in the library's catalog.
  Fetch the book data from the provided API. 
  Users should be able to click on an individual book to navigate
   to the SingleBook component and view its details. */

import React, {useEffect, useState} from "react";
function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async (params) => {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
            const data = await response.json();
            setBooks(data);
        };
        fetchBooks();
    }, []);
    return (
        <div>
            <h2> Library </h2>
            <ul> {books.map(book => (
                <li key={book.id}>
                    <a href={`/books/$book.id}`}> {book.title} </a>
                </li>
            ))}
            </ul>
        </div>
    );
}
export default BookList