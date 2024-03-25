import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useState } from "react";
import Cards from "../components/Cards";


const Home = () => {
    
    
    const booksAll = useLoaderData();
    
    
    return (
        <div>
            <div className="container mx-auto">
                <Banner></Banner>
            </div>
            <div className="my-6">
                <h2 className=" text-3xl font-bold text-center">Books</h2>
            </div>
            {
                booksAll.map((book) => <Cards key={book.bookId} book={book}></Cards>)
            }

        </div>
    );
};

export default Home;