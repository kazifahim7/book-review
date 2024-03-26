import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/ReadStorage";
import ReadStore from "../components/ReadStore";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
    const books = useLoaderData();
    const [read, setRead] = useState([]);
    const [sortBy, setSortBy] = useState("rating");

    useEffect(() => {
        if (Array.isArray(books)) {
            const storeReadBooks = getReadBooks();
            const exists = books.filter((book) => storeReadBooks.includes(book.bookId));
            setRead(sortBy === "rating"  ? exists.sort((a, b) => b.rating - a.rating) : exists);
        } else {
            setRead([]);
        }
    }, [books, sortBy]);

    const handleSort = (text) => {
        setSortBy(text);
    };

    return (
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

            <div className="mt-8">
                <div className="container mx-auto my-4">
                    {read.map((book) => (
                        <ReadStore key={book.bookId} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;
