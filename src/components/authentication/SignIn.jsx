import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase/firebase.config";


const SignIn = () => {
    const [show, setShow] = useState(false)
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
        signInWithEmailAndPassword(auth, email, password)
        .then(res=>{
            const users =res.user;
            console.log(users)
            toast.success('log in done')
        })
        .catch((error)=>console.error(error.massage))


    }
    const emailRef=useRef()
    const resetPassword=()=>{
        const email =emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then((res)=>{toast.warning('check your mail') 
        console.log(res.user)})
        .catch((error)=>console.log(error))


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">log in now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative w-full">
                                    <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span onClick={() => setShow(!show)} className="absolute mt-4 right-3">{show ? <FaEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>

                            <p onClick={resetPassword} className="underline">forgot Password</p>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">log in </button>
                                <p>you have no account ? <NavLink to={'/signUp'}> <span className="underline">please sign up</span> </NavLink> </p>
                                <ToastContainer></ToastContainer>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    );
};
export default SignIn;