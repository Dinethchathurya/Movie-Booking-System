import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Login = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-cover bg-center mt-10 mb-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Login</h2>
                    <p className="text-white text-opacity-75 text-center mb-8">
                        Please enter your login and password!
                    </p>

                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Email"
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

                    <div className="mb-6 text-center">
                        <a href="#" className="text-white text-opacity-75 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ed0c6e] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-pink-500"
                    >
                        Login
                    </button>

                    <p className="mt-6 text-center text-white">
                        Don't have an account?{' '}
                        <a href="/register" className="text-white font-bold hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
