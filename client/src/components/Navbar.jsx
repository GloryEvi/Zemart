import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";
import { useAppContext } from '../context/AppContext';
import toast from "react-hot-toast";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const {
      user,
      setUser,
      setShowUserLogin,
      navigate,
      setSearchQuery,
      searchQuery,
      getCartCount,
      axios,
    } = useAppContext();

    const logout = async ()=>{
        try {
             const { data } = await axios.get('/api/user/logout')
              if(data.success){
              toast.success(data.message)
                  setUser(null);
                  navigate('/')
                }else{
                  toast.error(data.message)
                }
              } catch (error) {
                toast.error(error.message)
              }
    }

    useEffect(()=>{
          if(searchQuery.length > 0){
            navigate("/products")
          }
        },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <svg
          className="h-9"
          viewBox="0 0 220 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="zGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#1976d2", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#1565c0", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0d47a1", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="zGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#42a5f5", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1976d2", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <circle cx="35" cy="35" r="28" fill="url(#zGradient)" />

          <g transform="translate(35,35)">
            <path d="M -12 -10 L 8 -10 L 6 -6 L -8 -6 Z" fill="white" />
            <path d="M 6 -6 L -6 6 L -8 2 L 4 -10 Z" fill="white" />
            <path d="M -8 6 L 8 10 L 6 6 L -6 6 Z" fill="white" />
            <circle cx="10" cy="-8" r="2" fill="url(#zGradient2)" />
          </g>

          <text
            x="75"
            y="45"
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            fontSize="32"
            fontWeight="700"
            letterSpacing="-1px"
          >
            <tspan fill="url(#zGradient)">Z</tspan>
            <tspan fill="#374151">emart</tspan>
          </text>

          <path
            d="M 75 52 Q 110 48 145 52 Q 180 56 200 52"
            stroke="url(#zGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </NavLink>

      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className=""
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>
      </div>
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          {user && (
            <NavLink to="/products" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}
          <NavLink to="/" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar
