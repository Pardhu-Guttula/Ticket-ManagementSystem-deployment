import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/botimage.avif";

function AgentSignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        const formData = {
            name,
            email,
            username,
            password,
            confirmPassword,
        };

        // Validate Name
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            validationErrors.name =
                'Name can only contain letters and spaces';
        }

        // Validate Email
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is invalid';
        }

        // Validate Username
        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        } else if (!/^\w{3,}$/.test(username)) {
            // At least 3 characters
            validationErrors.username =
                'Username must be at least 3 characters long and contain only letters, numbers, and underscores';
        }

        // Validate Password
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (
            !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}/.test(
                password
            )
        ) {
            const passwordRequirements = [
                'Password must contain one Uppercase Letter',
                'one Lowercase Letter',
                'one Number',
                'one Special Character',
                'Should be at least 8 characters long',
            ];
            validationErrors.password = (
                <div className="text-left mx-4 text-xs mb-1 text-red-500">
                    {passwordRequirements.map((requirement, index) => (
                        <p key={index}>{requirement}</p>
                    ))}
                </div>
            );
        }

        // Validate Confirm Password
        if (!confirmPassword.trim()) {
            validationErrors.confirmPassword =
                'Confirm Password is required';
        } else if (confirmPassword !== password) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(validationErrors).length === 0) {
            alert(JSON.stringify(formData, undefined, 2));
        } else {
            // Update the errors state with validation errors
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }

        // Update state
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'username') {
            setUserName(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Image Container */}
            <div className="md:w-1/2 md:flex items-center justify-center bg-[#ffffff] overflow-hidden hidden md:block">
                <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </div>
            {/* Signup Card Container */}
            <div className="flex items-center justify-center w-full md:w-1/2  bg-[#D5D8F2] p-4 h-screen md:h-auto">
                <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col w-full max-w-sm mx-auto">
                <h5 className="font-poppins text-xl text-center py-4 text-[#666ee2]">Join Us</h5>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                value={name}
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#666ee2] focus:border-transparent"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                value={email}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#666ee2] focus:border-transparent"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                value={username}
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#666ee2] focus:border-transparent"
                            />
                            {errors.username && (
                                <p className="text-xs text-red-500">
                                    {errors.username}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    value={password}
                                    type={visible ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#666ee2] focus:border-transparent"
                                />
                                <div
                                    onClick={() => setVisible(!visible)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                                    {visible ? (
                                        <FaEye className="text-gray-400" />
                                    ) : (
                                        <FaEyeSlash className="text-gray-400" />
                                    )}
                                </div>
                            </div>
                            {errors.password && (
                                <div className="text-xs text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    value={confirmPassword}
                                    type={confirmPasswordVisible ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#666ee2] focus:border-transparent"
                                />
                                <div
                                    onClick={() =>
                                        setConfirmPasswordVisible(!confirmPasswordVisible)
                                    }
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                >
                                    {confirmPasswordVisible ? (
                                        <FaEye className="text-gray-400" />
                                    ) : (
                                        <FaEyeSlash className="text-gray-400" />
                                    )}
                                </div>
                            </div>
                            {errors.confirmPassword && (
                                <div className="text-xs text-red-500">
                                    {errors.confirmPassword}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#666ee2] text-white rounded-md hover:bg-[#5058e5] transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-sm text-center mt-4">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-[#666ee2] font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AgentSignUp;
