import FAQs from "../components/FAQs";

function Main() {
  return (
    <div className="space-y-28 scroll-smooth max-w-screen-2xl mx-auto">
      {/* hero */}
      <section className="w-[85%] mx-auto space-y-6 min-h-[75vh] flex flex-col items-center justify-center mt-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5.5rem] text-center font-semibold max-w-5xl xl:max-w-8xl mx-auto leading-snug md:leading-relaxed">
          Welcome to Let's Talk - Your Remote Customer <br /> Service Partner
        </h1>
        <p className="text-center max-w-xl mx-auto text-slate-700">
          Are you ready to elevate your customer service experience? Look no
          further! At Let's Talk, we redefine remote customer service, blending
          cutting-edge technology with a human touch to exceed your
          expectations.
        </p>
        <button className="bg-primary hover:scale-105 transition-all px-3 py-2 md:px-5 md:py-3 rounded text-white font-medium mx-auto flex">
          Get a quote
        </button>
      </section>

      {/* about */}
      <section
        id="about"
        className="scroll-mt-12 w-[85%] mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 items-center"
      >
        <img
          className="w-full h-[28rem] object-cover rounded mx-auto max-w-md"
          src="https://picsum.photos/200/300"
          alt=""
        />
        <div className="space-y-5">
          <h5 className="text-primary font-medium -mb-5">ABOUT US</h5>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Our Approach{" "}
          </h1>
          <p>
            Welcome to Let's Talk, where we redefine remote customer service
            with a blend of cutting-edge technology and a genuine human touch.
            Our mission is to elevate your customer service experience by
            providing personalized solutions that go beyond expectations. <br />{" "}
            <br /> At Let's Talk, we value meaningful connections and prioritize
            understanding your unique needs. Our dedicated team is committed to
            building lasting relationships, ensuring trust, efficiency, and
            innovation in every interaction. <br /> <br /> Choose Let's Talk for
            a new era in customer service – where every conversation becomes an
            opportunity to make a positive impact. Thank you for selecting us as
            your partner in exceeding expectations.
          </p>
        </div>
      </section>

      {/* services */}
      <section id="services" className="scroll-mt-12 space-y-16 py-12">
        <h4 className="text-center font-semibold text-xl text-primary">
          OUR SERVICES
        </h4>
        <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[80%] text-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-6">
          <div className="relative space-y-5 p-6 border border-slate-200 hover:border-primary transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
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
            <h3 className="font-semibold text-xl ">Calls</h3>
            <p className="text-slate-700">
              Experience unparalleled customer connections with our call
              services at Let's Talk. Our skilled team ensures every call
              reflects your brand's essence, delivering a human touch that
              fosters trust and satisfaction.
            </p>
          </div>
          <div className="relative space-y-5 p-6 border border-slate-200 hover:border-primary transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
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
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl ">Chat</h3>
            <p className="text-slate-700">
              Engage customers in real-time through our chat services. At Let's
              Talk, we redefine instant messaging, providing personalized and
              efficient support that transforms casual chats into meaningful
              interactions, leaving a lasting impression.
            </p>
          </div>
          <div className="relative space-y-5 p-6 border border-slate-200 hover:border-primary transition-all hover:-translate-y-2 rounded-md flex flex-col items-center">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl ">Emails</h3>
            <p className="text-slate-700">
              Elevate your written communication with Let's Talk's email
              services. Our expert team crafts thoughtful and timely responses,
              ensuring your brand's voice is conveyed seamlessly. Experience the
              power of impactful emails that resonate with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* faqs */}
      <section id="faqs">
        <FAQs />
      </section>
    </div>
  );
}

export default Main;
