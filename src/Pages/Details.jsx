
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { setBookById } from "../utility/localStorage";
import { setReadBookById } from "../utility/ReadStorage";
import { setWishBookById } from "../utility/wish";
import { useState } from "react";





const Details = () => {
    const allBooks = useLoaderData();
    const { bookId } = useParams();
    const num = parseInt(bookId);
    const book = allBooks.find((books) => books.bookId === num);
    const [addReadList, setReadList] = useState(false)
    const [addWishList, setWishList] = useState(false)




    const handleReadClick = () => {

        if (!addReadList) {

            setBookById(num);
            setReadBookById(num);
            setReadList(true)
            toast.success('Book added to Read!')

        }
        else {
            console.log(addReadList)
            toast.warn('already added!')
        }



    }

    const handleWishlistClick = () => {
        if (!addWishList && !addReadList) {
            setBookById(num);
            setWishBookById(num);
            setWishList(true)
            toast.success('Book added to Wishlist!')


        }
        else if (addReadList) {
            toast.warn('already added!')


        }
        else {
            toast.warn('This book has already been added to Wishlist!');
        }


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
                        <button onClick={handleReadClick} className="btn btn-outline">Read</button>

                        <button onClick={handleWishlistClick} className="btn btn-primary">Wishlist</button>

                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>



        </div>
    );
};

export default Details;