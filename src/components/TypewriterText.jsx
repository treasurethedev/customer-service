import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5.5rem] text-center font-semibold max-w-5xl xl:max-w-[100rem] mx-auto leading-snug md:leading-relaxed text-white">
      <Typewriter
        options={{ loop: true }}
        onInit={(str) =>
          str
            .typeString(`Welcome to Let's Talk`)
            .pauseFor(2000)
            .deleteAll()
            .typeString("Your Remote Customer <br/> Service Partner")
            .pauseFor(1000)
            .start()
        }
      />
    </h1>
  );
};

export default TypewriterText;
