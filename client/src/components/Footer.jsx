import { assets, footerLinks } from "../assets/assets";

const Footer = () => {

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
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
          <p className="max-w-[410px] mt-6">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
