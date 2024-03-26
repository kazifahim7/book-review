
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { setBookById } from "../utility/localStorage";
import { setReadBookById } from "../utility/ReadStorage";


const Details = () => {
    const allBooks = useLoaderData();
    const { bookId } = useParams();
    const num = parseInt(bookId);
    const book = allBooks.find((books) => books.bookId === num);
    console.log(book);
    const handleClick = ()=>{
        
        setBookById(num)
        setReadBookById(num)
        
    }
    const handleCLick2 =()=>{
        setBookById(num)
    }

    return (
        <div className="md:container mx-auto my-24">

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={book.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-extrabold">{book.bookName}</h2>
                    <hr />
                    <p className="font-bold">Author : <span>{book.author}</span></p>
                    <br />
                    <p className="font-bold">category: <span>{book.category}</span></p>
                    <p className="font-bold">review : <span>{book.review}</span></p>
                    <hr />
                    <div>
                        <p>Tag : <span className="text-[#23BE0A] font-semibold">{book.tags[0]} , {book.tags[1]}</span></p>
                    </div>

                    <hr />
                    <div className="space-y-4">
                        <p className="space-x-2"> <span>Number of Pages: </span>   <strong>{book.totalPages}</strong></p>
                        <p className="space-x-2"> <span>Publisher: </span>   <strong>{book.publisher}</strong></p>
                        <p className="space-x-2"> <span>Year of Publishing: </span>   <strong>{book.yearOfPublishing}</strong></p>
                        <p className="space-x-2"> <span>Rating: </span>   <strong>{book.rating}</strong></p>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={handleClick} className="btn btn-outline">Read</button>
                        <ToastContainer></ToastContainer>
                        <button onClick={handleCLick2} className="btn btn-primary">Wishlist</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Details;