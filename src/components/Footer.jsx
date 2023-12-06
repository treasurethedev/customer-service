// import twitter from "../assets/twitter.png";
// import instagram from "../assets/instagram.png";
// import linkedin from "../assets/linkedin.png";
import logoWhite from "../assets/logos/Full Colour/White.png"

function Footer() {
	return (
		<footer className="bg-primary py-8">
			<div className="flex justify-between items-center w-[85%] mx-auto text-white">
			<img src={logoWhite} className="w-44 object-cover" alt="" />
				{/* <div className="flex space-x-3">
					<img className="w-5 h-5" src={twitter} alt="" />
					<img className="w-5 h-5" src={instagram} alt="" />
					<img className="w-5 h-5" src={linkedin} alt="" />
				</div> */}
				<span>&copy; letstalk 2023</span>
			</div>
		</footer>
	);
}

export default Footer;
