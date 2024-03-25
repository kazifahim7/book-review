import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Cards = ({ book }) => {
    return (
        <Link to={`/books/${book.bookId}`}>
            <div className="card card-compact duration-1000 hover:scale-105 bg-base-100 shadow-xl">
                <figure><img src={book.image} className='h-48' alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-[#23BE0A] text-xl font-bold'>Tags : {book.tags[0]} , {book.tags[1]}</p>
                    <h2 className="card-title">{book.bookName}</h2>
                    <p>Author: {book.author}</p>
                    <div className="card-actions border-t-2 p-3 justify-start">
                        <p>Category: {book.category}</p>
                        <p className='flex gap-2 items-center'>{book.rating} <FaRegStar /> </p>
                        
                    </div>
                </div>
            </div>


        </Link>
    );
};
Cards.propTypes = {
    book: PropTypes.object.isRequired,

}

export default Cards;