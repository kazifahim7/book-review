import {  useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/ReadStorage";
import ReadStore from "../components/ReadStore";


const ReadBooks = () => {
   
    const books = useLoaderData()
    const [read, setRead] = useState([])
    useEffect(() => {
        if (Array.isArray(books)) { 
            const storeReadBooks = getReadBooks();
            const exists = books.filter((book) => storeReadBooks.includes(book.bookId));
            setRead(exists);
        } 
        else {
            setRead([]); 
        }
    }, [books]);
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