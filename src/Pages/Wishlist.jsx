import { useEffect, useState } from "react";
import { getWishBooks } from "../utility/wish";
import { useLoaderData } from "react-router-dom";
import WishStore from "../components/WishStore";
import { IoMdArrowDropdown } from "react-icons/io";


const Wishlist = () => {
    const books = useLoaderData()
    const [wish, setWish] = useState([])
    const [sort, setSort] = useState("rating")
   
    useEffect(() => {
        if (Array.isArray(books)) { 
            const storedWishBooks = getWishBooks();
            const exists = books.filter((book) => storedWishBooks.includes(book.bookId));
            let sortedBooks = [];

            if (sort === "rating") {
                sortedBooks = exists.sort((a, b) => b.rating - a.rating);

            }
            else if (sort === "totalPages") {
                sortedBooks = exists.sort((a, b) => b.totalPages - a.totalPages);
            }
            else if (sort === "yearOfPublishing") {
                sortedBooks = exists.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            }
            else {
                sortedBooks = exists;
            }
            setWish(sortedBooks);
        }
        else {
            setWish([]);
        }
    }, [books,sort]);
    
    const handleSort =(text)=>{
        setSort(text)

    }
   



    return (
        <div>



            <div>
                <div className="items-center flex justify-center">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-[#23BE0A]">
                            Sort By <IoMdArrowDropdown />
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>
                                <button onClick={() => handleSort("rating")}>Rating</button>
                            </li>
                            <li>
                                <button onClick={() => handleSort("totalPages")}>Number of pages</button>
                            </li>
                            <li>
                                <button onClick={() => handleSort("yearOfPublishing")}>Publisher year</button>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>

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