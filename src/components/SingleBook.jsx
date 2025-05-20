/* TODO - add your code to create a functional React component that renders
 details for a single book. Fetch the book data from the provided API.
  You may consider conditionally rendering a 'Checkout' button for logged
   in users. */

   import { useParams , Link } from "react-router-dom";
   
   const SingleBook = ({ allBooks , setAllBooks , user}) => {
    const params = useParams()
    const id = params.id*1
const book = allBooks.find ((book)=>{
    return book.id === id
})
return (
<div>
            <div>
                <hr/>
                {user?.id? &&
                <div>
    
                    </div>)}
                <hr/>
    <div className="book">
        <h3>{book.name}</h3>
        <P>Description: {book.description}</P>
        <p>Price: ${book.price/100}</p>
        <img src={book.image ? book.image : null} alt={book.name}/>
       <p>Rating: {book.rating} / 5</p>
    </div>
</div>
</div>
(
    <h3> Loading ...</h3>
)
