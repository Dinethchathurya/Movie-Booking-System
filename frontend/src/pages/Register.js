import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {

    const [gender, setGender] = useState("");

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

    return(
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-cover bg-center mt-10 mb-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white rounded-xl p-8 w-full max-w-lg">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Register</h2>
                    <p className="text-white text-opacity-75 text-center mb-8">
                    Please enter your details!
                    </p>

                    <div className="mb-6">
                        <input
                            type="firstname"
                            placeholder="First Name"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="lastname"
                            placeholder="Last Name"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6 flex items-center space-x-6 justify-between">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        />
                        <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        />
                        <span>Female</span>
                    </label>
                </div>


                    <div className="mb-6">
                        <input
                            type="NIC"
                            placeholder="NIC Number"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="address"
                            placeholder="Address"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <div className="mb-7">
                        <input
                            type="confirm-password"
                            placeholder="Confirm Password"
                            className="form-input block w-full rounded-md p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ed0c6e] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-pink-500"
                    >
                        Create Account
                    </button>

                    <p className="mt-6 text-center text-white">
                        Have an account?{' '}
                        <a href="/login" className="text-white font-bold hover:underline">Sign In</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Register;