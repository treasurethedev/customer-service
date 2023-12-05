import { useState } from "react";

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);
	return (
		<div>
			<nav className="flex justify-between items-start w-[85%] mx-auto border border-slate-200 px-3 py-3 rounded-lg relative top-6 h-fit">
				<div className="font-serif text-2xl md:text-3xl font-bold">LOGO</div>
				<div className={`w-full flex flex-col md:flex-row items-center justify-between ${showNavbar ? "" : "hidden"}`}>
					<div className={`mx-auto space-x-4 md:space-x-5 lg:space-x-6`}>
						<a
							className="hover:underline hover:underline-offset-2 transition-all"
							href=""
						>
							About
						</a>
						<a
							className="hover:underline hover:underline-offset-2 transition-all"
							href=""
						>
							Features
						</a>
						<a
							className="hover:underline hover:underline-offset-2 transition-all"
							href=""
						>
							Services
						</a>
						<a
							className="hover:underline hover:underline-offset-2 transition-all"
							href=""
						>
							FAQ
						</a>
					</div>
					<button className="bg-cyan-500 hover:scale-105 transition-all px-3 py-2 md:px-5 md:py-3 rounded text-white font-medium">
						Get a quote
					</button>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 my-auto"
                    onClick={() => setShowNavbar(!showNavbar)}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</nav>
		</div>
	);
}

export default Navbar;
