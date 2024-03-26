import {  useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/ReadStorage";
import ReadStore from "../components/ReadStore";


const ReadBooks = () => {
   
    const books = useLoaderData()
    const [read, setRead] = useState([])
    useEffect(() => {
        const storeReadB0oks = getReadBooks();
        const exits = books.filter((book) => storeReadB0oks.includes(book.bookId))
        setRead(exits)
    }, [books])
    return (
        <div>
            

            <div className="mt-8 ">
                

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