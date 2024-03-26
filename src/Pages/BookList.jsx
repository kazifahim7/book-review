import { Outlet } from "react-router-dom";


const BookList = () => {
    






    return (
        <div>
            <div className="p-10 bg-gray-200 container mx-auto rounded-lg">
                <p className="text-3xl font-bold text-center">Books</p>
            </div>


            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            

        </div>
    );
};

export default BookList;