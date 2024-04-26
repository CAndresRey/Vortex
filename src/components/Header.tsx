import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-10 bg-white shadow-lg transition-all duration-300 ${
                isSticky ? 'py-2' : 'py-4'
            }`}
        >
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" />
                    <h1 className="ml-2 text-lg font-semibold">Your App Name</h1>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-gray-800">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="text-gray-600 hover:text-gray-800">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-600 hover:text-gray-800">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;