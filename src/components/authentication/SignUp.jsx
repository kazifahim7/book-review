import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
    const [show,setShow]=useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.email.value = ''
        e.target.password.value = ''
        if (password < 6) {
            toast.warning('please enter atlist 6 char!')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning('please enter a one upperCase data!')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                toast.success('register successful')
                sendEmailVerification(res.user)
                .then()
                .catch()
            })
            .catch(error => {
                console.log(error)
                toast.error('already registered');

            })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative w-full">
                                    <input type={show?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span onClick={() => setShow(!show)} className="absolute mt-4 right-3">{show ? <FaEye /> :<FaEyeSlash />}</span>
                                </div>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register NOW</button>
                                <p>you have already account ? <NavLink to={'/signIn'}> <span className="underline">please log in</span> </NavLink> </p>
                                <ToastContainer></ToastContainer>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;