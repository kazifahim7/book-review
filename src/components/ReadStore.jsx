import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";

const ReadStore = ({ book }) => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-2">
                <figure><img src={book.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{book.bookName}</h2>
                    <div className='flex gap-4 items-center'>
                        <p> tag : #{book.tags[0]} , #{book.tags[1]}</p>
                        <p className='flex items-center gap-2'><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                    </div>

                    <p> Author :{book.author}</p>

                    <div className='flex gap-4 items-center'>
                        <p className='flex items-center gap-2'><CgProfile /> Publisher:{book.publisher}</p>
                        <p className='flex items-center gap-2'><RiProfileLine /> Page:{book.totalPages}</p>
                    </div>

                    <hr />

                    <div className='space-x-4 flex flex-wrap  gap-2'>
                        <button className="btn btn-outline btn-success">Category: {book.category}</button>
                        <button className="btn btn-outline btn-success">Rating: {book.rating}</button>
                        <button className="btn btn-outline btn-success">View Details</button>

                    </div>








                </div>
            </div>

        </div>
    );
};
ReadStore.propTypes = {
    book: PropTypes.object.isRequired,

}

export default ReadStore;