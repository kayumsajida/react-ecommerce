import { Link } from "react-router-dom";
import loginimage from "../assets/images/login.webp";
import { useState } from "react";

const Register = () => {
     const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Registered:", {name, email, password});
    }

    return (
        <>
            <div className="flex items-center">
                <div className="w-full md:w-1/2 flex-col justify-center  md:p-12 p-8">
                    <form onSubmit={handleSubmit} className="w-full mx-auto max-w-md border border-gray-200 shadow-sm rounded-sm p-8">
                        <h2 className="text-sm font-medium text-center mb-2">Register</h2>
                        <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>
                        <p className="text-center text-sm mb-6">
                            Enter your email and password to create an account.
                        </p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:shadow-none focus:border-gray-200 transition duration-300" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:shadow-none focus:border-gray-200 transition duration-300" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:shadow-none focus:border-gray-200 transition duration-300" />
                        </div>
                        <button type="submit" className="bg-black w-full text-white text-sm py-2 cursor-pointer rounded-lg hover:bg-gray-800 transition duration-300">Sign Up</button>
                        <p className="text-sm text-gray-600 mt-4 text-center">
                            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
                        </p>
                    </form>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src={loginimage} alt="Login to Account" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default Register;