import { useEffect, useState } from "react";
import { getWishBooks } from "../utility/wish";
import { useLoaderData } from "react-router-dom";
import WishStore from "../components/WishStore";


const Wishlist = () => {
    const books = useLoaderData()
    const [wish, setWish] = useState([])
    useEffect(() => {
        if (Array.isArray(books)) { 
            const storedWishBooks = getWishBooks();
            const exists = books.filter((book) => storedWishBooks.includes(book.bookId));
            setWish(exists);
        } else {
            setWish([]); 
        }
    }, [books]);
    return (
        <div>

            <div className="mt-8 ">


                <div className="container mx-auto my-4">
                    {
                        wish.map((book) => <WishStore key={book.bookId} book={book} ></WishStore>)
                    }

                </div>


            </div>
            
            
        </div>
    );
};

export default Wishlist;