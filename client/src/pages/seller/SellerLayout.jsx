import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const SellerLayout = () => {

  const { setIsSeller } = useAppContext();

  const sidebarLinks = [
          { name: "Add Product", path: "/seller", icon: assets.add_icon },
          { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
          { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
      ];

const logout = async ()=>{
        setIsSeller(false);
    }


  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
        <Link to="/">
          <svg
            className="h-9"
            viewBox="0 0 220 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="zGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
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
              <linearGradient
                id="zGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
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
        </Link>

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                             ${
                               isActive
                                 ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                 : "hover:bg-gray-100/90 border-white"
                             }`}
            >
              <img src={item.icon} alt="" className="w-7 h-7" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
