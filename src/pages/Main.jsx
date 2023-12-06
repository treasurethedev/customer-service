function Main() {
	return (
		<div className="space-y-28">
			{/* hero */}
			<section className="w-[85%] mx-auto space-y-6 min-h-[75vh] flex flex-col items-center justify-center mt-12">
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-center font-medium max-w-4xl mx-auto">
					Welcome to Let's Talk - Your Remote Customer Service Partner
				</h1>
				<p className="text-center max-w-3xl mx-auto">
					Are you ready to elevate your customer service experience? Look no
					further! At Let's Talk, we redefine remote customer service, blending
					cutting-edge technology with a human touch to exceed your
					expectations.
				</p>
				<button className="bg-cyan-500 hover:scale-105 transition-all px-3 py-2 md:px-5 md:py-3 rounded text-white font-medium mx-auto flex">
					Get a quote
				</button>
			</section>

			{/* about */}
			<section className="w-[85%] mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 items-center">
				<img
					className="w-full h-[28rem] object-cover rounded mx-auto max-w-md"
					src="https://picsum.photos/200/300"
					alt=""
				/>
				<div className="space-y-5">
					<h5 className="text-cyan-500 font-medium -mb-5">ABOUT US</h5>
					<h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl">
						Lorem Ipsum{" "}
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
						repellat ad, sequi beatae a, ab sint doloribus, accusantium culpa
						ipsam voluptatem possimus incidunt. Exercitationem saepe
						perferendis, debitis earum alias ipsa. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Voluptatibus illo commodi expedita
						suscipit maiores impedit omnis libero alias id pariatur. Molestiae
						nam, blanditiis ab temporibus vero quidem doloremque dolorum
						necessitatibus.
					</p>
				</div>
			</section>

			{/* services */}
			<section className="space-y-16 py-12">
                <h4 className="text-center font-medium text-cyan-500">OUR SERVICES</h4>
				<div className="w-[80%] text-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
					<div className="relative space-y-5 p-6 border border-slate-200 hover:border-cyan-500 transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
						<div className="absolute -top-7 bg-gradient-to-t from-cyan-100 to-white border p-4 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</div>
                        <h3 className="font-serif font-medium text-xl ">Calls</h3>
                        <p className="text-slate-700">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis est sit ipsam ut, obcaecati veniam optio recusandae expedita repellendus eligendi, fugit consectetur harum, libero dolore impedit delectus corrupti molestias.</p>
					</div>
					<div className="relative space-y-5 p-6 border border-slate-200 hover:border-cyan-500 transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
						<div className="absolute -top-7 bg-gradient-to-t from-cyan-100 to-white border p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

						</div>
                        <h3 className="font-serif font-medium text-xl ">Text</h3>
                         <p className="text-slate-700">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis est sit ipsam ut, obcaecati veniam optio recusandae expedita repellendus eligendi, fugit consectetur harum, libero dolore impedit delectus corrupti molestias.</p>
					</div>
					<div className="relative space-y-5 p-6 border border-slate-200 hover:border-cyan-500 transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
						<div className="absolute -top-7 bg-gradient-to-t from-cyan-100 to-white border p-4 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</div>
                        <h3 className="font-serif font-medium text-xl ">Calls</h3>
                        <p className="text-slate-700">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis est sit ipsam ut, obcaecati veniam optio recusandae expedita repellendus eligendi, fugit consectetur harum, libero dolore impedit delectus corrupti molestias.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Main;
