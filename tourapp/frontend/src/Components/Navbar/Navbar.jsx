import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';



const Home = () => <h2>Home Page</h2>;
const Products = () => <h2>Products Page</h2>;
const Resources = () => <h2>Resources Page</h2>;
const Contacts = () => <h2>Contacts Page</h2>;
const Blog = () => <h2>Blog Page</h2>;

const Navbar = () => {
    return (
        <Router>
            <section className='navBarSection'>
                <div className="header">
                    <div className="logoDiv">
                        <Link to="/" className="logo">
                            <h1 className='flex'><SiYourtraveldottv className="icon" />My Tour App</h1>
                        </Link>
                    </div>
                    
                    <div className="navBar">
                        <ul className="navLists flex">
                            <li className="navItem">
                                <Link to="/" className="navLink">Home</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/products" className="navLink">Products</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/resources" className="navLink">Resources</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/contacts" className="navLink">Contacts</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/blog" className="navLink">Blog</Link>
                            </li>
                            <div className="headerBtns flex">
                                <button className='btn loginBtn'>
                                    <Link to="/login">Login</Link>
                                </button>
                                <button className='btn'>
                                    <Link to="/signup">SignUp</Link>
                                </button>
                            </div>
                        </ul>
                        
                        
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </section>
        </Router>
    );
};

export default Navbar;