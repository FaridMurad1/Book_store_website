import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User logged out Successfully.')
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className='hover:text-yellow-300 hover:font-bold hover:text-[15px]'><Link to="/">Home</Link></li>
        {
            user && <li className='hover:text-yellow-300 hover:font-bold hover:text-[15px]'><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user ? (
                <>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <p className="text-sm md:text-base text-white mb-5">{user.displayName}</p>
                        <img className="w-10 h-10 md:w-14 md:h-14 border-2 border-yellow-600 rounded-full" src={user.photoURL} alt="User Profile" />
                    </div>
                    <button onClick={handleLogOut} className=" bg-yellow-700 ml-8 md:h-14 btn-sm md:w-28 ">
                        Log out
                    </button>
                </>
            ) : (
                <div className="flex gap-2">
                    <Link to="/login">
                        <button className="btn btn-info bg-yellow-300 btn-sm md:h-14 md:w-28 ">Log in</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn bg-orange-600 md:h-14 text-white btn-sm md:w-28">Register</button>
                    </Link>
                </div>
            )
        }
    </>

    return (
        <>
            {/* <div className="navbar fixed z-10 bg-opacity-25 max-w-screen-xl bg-black text-white mb-10"> */}
            <div className="navbar z-10  max-w-screen-xl bg-black text-white">
                <div className="navbar-start">

                    <a className="text-xl flex gap-1">
                        {/* <img src={dropletLogo} className='w-2 md:w-6' alt="dropletlogo" /> */}
                        <span className='text-sm md:text-xl text-yellow-300 font-bold p-2 flex justify-center items-center gap-4'>
                            <img
                                src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg?t=st=1736273930~exp=1736277530~hmac=3819a709a23b454b066b351ccafbe4b267fc6fadafcc97b9f7ebc4769317ab5c&w=740"
                                alt="Book Store Logo"
                                className="w-12 md:w-16"
                            />
                            <p className=''>Book store</p>
                        </span>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ? (
                            <>
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <p className="text-sm md:text-base text-white">{user.displayName}</p>
                                    <img className="w-10 h-10 md:w-14 md:h-14 border-2 border-yellow-600 rounded-full" src={user.photoURL} alt="User Profile" />
                                </div>
                                <button onClick={handleLogOut} className="btn btn-info bg-yellow-700 md:h-14 btn-sm md:w-28">
                                    Log out
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-2">
                                <Link to="/login">
                                    <button className="btn btn-info bg-yellow-300 btn-sm md:h-14 md:w-28 ">Log in</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn bg-orange-600 md:h-14 text-white btn-sm md:w-28">Register</button>
                                </Link>
                            </div>
                        )
                    } */}
                </div>
                {/* <ToastContainer /> */}
            </div>
        </>
    );
};

export default NavBar;