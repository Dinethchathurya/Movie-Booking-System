import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-between">
            <div className="flex justify-center items-center py-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white rounded-[12px_70px_15px_70px] p-8 w-full max-w-md">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Login</h2>
                    <p className="text-white text-opacity-75 text-center mb-8">Please enter your login and password!</p>

                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-input block w-full rounded-[10px_50px_7px_50px] p-3 text-gray-700 focus:outline-none focus:ring focus:ring-black"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input block w-full rounded-[10px_50px_7px_50px] p-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-6 text-center">
                        <a href="#" className="text-white text-opacity-75 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-900 text-green-500 py-2 px-4 rounded-[7px_50px_7px_50px] text-lg font-semibold hover:bg-green-700"
                    >
                        Login
                    </button>

                    <p className="mt-6 text-center text-white">
                        Don't have an account?{' '}
                        <a href="#" className="text-green-500 font-bold hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
