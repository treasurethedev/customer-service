import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
	return (
		<footer className="bg-cyan-500 py-8">
			<div className="flex justify-between w-[85%] mx-auto text-white">
				<h1>LOGO</h1>
				<div className="flex space-x-3">
					<img className="w-5 h-5" src={twitter} alt="" />
					<img className="w-5 h-5" src={instagram} alt="" />
					<img className="w-5 h-5" src={linkedin} alt="" />
				</div>
				<span>&copy; letstalk 2023</span>
			</div>
		</footer>
	);
}

export default Footer;
