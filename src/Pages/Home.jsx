import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

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
            <div className="container mx-auto grid md:grid-cols-3 gap-6 my-6">
                {
                    booksAll.map((book) => <Cards key={book.bookId} book={book}></Cards>)
                }
            </div>

        </div>
    );
};

export default Home;