import { useState } from "react";

import { NavLink, Outlet} from "react-router-dom";


const BookList = () => {
    const [active, setActive] = useState(true);
    




    return (
        <div>
            <div className="p-10 bg-gray-200 container mx-auto rounded-lg">
                <p className="text-3xl font-bold text-center">Books</p>
            </div>

            <div className="flex items-center ml-10  mt-4 overflow-x-auto overflow-y-hidden justify-start flex-nowrap text-black">
                <p>
                    <NavLink to={''} onClick={() => setActive(true) }


                        rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${active && 'border border-b-0'}text-gray-400 rounded-t-lg`}  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-black">Read Books</span>
                    </NavLink>
                </p>
                <NavLink to='wish' onClick={() => {
                    setActive(false)
                    
                }}

                    rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${active || 'border border-b-0'} rounded-t-lg border-gray-400 text-black`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </NavLink>


            </div>


            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default BookList;