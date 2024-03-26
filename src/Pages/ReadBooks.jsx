import { useLoaderData } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/ReadStorage";
import ReadStore from "../components/ReadStore";


const ReadBooks = () => {
    const [active, setActive] = useState(true);
    const books = useLoaderData()
    const [read, setRead] = useState([])
    useEffect(() => {
        const storeReadB0oks = getReadBooks();
        const exits = books.filter((book) => storeReadB0oks.includes(book.bookId))
        setRead(exits)
    }, [books])
    return (
        <div>
            <div className="items-center flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A]">Sort By   <IoMdArrowDropdown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className="mt-8 ">
                <div className="flex items-center ml-10  overflow-x-auto overflow-y-hidden justify-start flex-nowrap text-black">
                    <Link to='' onClick={() => setActive(true)}


                        rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${active && 'border border-b-0'}text-gray-400 rounded-t-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-black">Read Books</span>
                    </Link>
                    <Link onClick={() => setActive(false)}

                        rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${active || 'border border-b-0'} rounded-t-lg border-gray-400 text-black`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>


                </div>

                <div className="container mx-auto my-4">
                    {
                        read.map((book) => <ReadStore key={book.bookId} book={book} ></ReadStore>)
                    }

                </div>


            </div>


        </div>
    );
};

export default ReadBooks;