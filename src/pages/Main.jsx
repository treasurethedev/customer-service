function Main() {
  return (
    <div className="space-y-20">
        {/* hero */}
        <section className="w-[85%] mx-auto space-y-6 min-h-[75vh] flex flex-col items-center justify-center mt-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-center font-medium max-w-4xl mx-auto">Welcome to Let's Talk - Your Remote Customer Service Partner</h1>
            <p className="text-center max-w-3xl mx-auto">Are you ready to elevate your customer service experience? Look no further! At Let's Talk, we redefine remote customer service, blending cutting-edge technology with a human touch to exceed your expectations.</p>
            <button className="bg-cyan-500 hover:scale-105 transition-all px-3 py-2 md:px-5 md:py-3 rounded text-white font-medium mx-auto flex">Get a quote</button>
        </section>

        {/* about */}
        <section className="w-[85%] mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 items-center">
            <img className="w-full h-[28rem] object-cover rounded mx-auto max-w-md" src="https://picsum.photos/200/300" alt="" />
            <div className="space-y-5">
                <h5 className="text-cyan-500 font-medium -mb-5">ABOUT US</h5>
                <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl">Lorem Ipsum </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat ad, sequi beatae a, ab sint doloribus, accusantium culpa ipsam voluptatem possimus incidunt. Exercitationem saepe perferendis, debitis earum alias ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illo commodi expedita suscipit maiores impedit omnis libero alias id pariatur. Molestiae nam, blanditiis ab temporibus vero quidem doloremque dolorum necessitatibus.</p>
            </div>
        </section>
    </div>
  )
}

export default Main