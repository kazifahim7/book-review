import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero md:h-[500px] rounded-lg bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/hM7t29b/pngwing-1.png" className="max-w-sm rounded-lg " />
                    <div className="p-8">
                        <h1 className="text-5xl font-bold bg-gradient-to-r  from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient ">Books to freshen up <br /> your bookshelf</h1>
                        <p className="py-6">Refreshing your bookshelf with new titles can be an exhilarating experience, <br /> offering fresh perspectives, captivating stories, and insightful knowledge.</p>
                        <NavLink to={'/listed'}><button className="btn  bg-[#23BE0A]">View The List</button></NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;