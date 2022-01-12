import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [scrolledTop, setScrolledTop] = useState(false);
    const [scrolledBottom, setScrolledBottom] = useState(false);

    var listener;

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 400) {
                setScrolledTop(true);
            } else {
                setScrolledTop(false)
            }
            if (scrolled < 400) {
                setScrolledBottom(true);
            } else {
                setScrolledBottom(false)
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, []);

    return (
        <nav className={`flex flex-row h-16 items-center gap-x-5 sticky top-0 z-50 bg-red-200 ${scrolledTop && 'bg-pink-300 transition ease-in-out duration-1000'} ${scrolledBottom && 'bg-red-200 transition ease-in-out duration-700'}`}>
            <Link to = "/" className="flex-row text-pink-600 text-3xl ml-8">CANDY</Link>
            <ul className="flex-auto flex flex-row gap-x-5">
                <li>
                    <Link to ="/" className="text-white text-2xl hover:text-pink-600">HOME</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white text-2xl hover:text-pink-600">ABOUT</Link>
                </li>
                <li>
                    <Link to="/tickets" className="text-white text-2xl hover:text-pink-600">TICKETS</Link>
                </li>
            </ul>
            <button className="bg-pink-600 text-white rounded-full px-4 py-2 mr-5 hover:bg-pink-500 transition duration-400">SIGN UP FOR OUR NEWSLETTER</button>
        </nav>
    )
}

export default Navbar;