import { useEffect, useState } from "react";
import { getWishBooks } from "../utility/wish";
import { useLoaderData } from "react-router-dom";
import WishStore from "../components/WishStore";


const Wishlist = () => {
    const books = useLoaderData()
    const [wish, setwish] = useState([])
    useEffect(() => {
        const storeReadB0oks = getWishBooks();
        const exits = books.filter((book) => storeReadB0oks.includes(book.bookId))
        setwish(exits)
    }, [books])
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