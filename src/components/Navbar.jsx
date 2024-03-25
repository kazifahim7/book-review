import { NavLink } from "react-router-dom";
import './nav.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/listed'}>Listed Books</NavLink>
                            <NavLink to={'/read'}>Pages to Read</NavLink>
                            <NavLink to={'/writer'}>Writer</NavLink>
                            <NavLink to={'/upcoming'}><p>New Book <sup>coming</sup></p></NavLink>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-xl">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/listed'}>Listed Books</NavLink>
                        <NavLink to={'/read'}>Pages to Read</NavLink>
                        <NavLink to={'/writer'}>Writer</NavLink>
                        <NavLink to={'/upcoming'}><p>New Book <sup className="text-red-400">coming</sup></p></NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A]">Sign up</a>
                    <a className="btn bg-[#59C6D2]">Sign in</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;