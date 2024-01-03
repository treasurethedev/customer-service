import Faq from "react-faq-component";
function FAQs() {
  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "What makes Let's Talk's customer service unique?",
        content: `Let's Talk stands out by blending cutting-edge technology with a human touch. We prioritize meaningful connections, offering personalized solutions that go beyond expectations, ensuring your customer service experience is unparalleled.`,
      },
      {
        title:
          " How does Let's Talk ensure data security in remote customer service?",
        content:
          "At Let's Talk, data security is a top priority. We employ robust encryption protocols and industry-leading security measures to safeguard your information. Rest assured, your data is handled with the utmost confidentiality and integrity.",
      },
      {
        title:
          "Can Let's Talk customize its services to fit our brand's unique needs?",
        content: `Absolutely! Let's Talk prides itself on tailoring services to match your brand identity. Our team takes the time to understand your specific requirements, providing personalized solutions that align with your values and goals.`,
      },
      {
        title:
          "What sets Let's Talk apart from automated customer service solutions?",
        content:
          "Unlike automated responses, Let's Talk offers a human-centric approach. Our dedicated team members are committed to understanding your customers and providing genuine, thoughtful assistance. We believe in building lasting relationships, not just resolving issues.",
      },
    ],
  };
  const styles = {
    bgColor: "transparent",
    // titleTextColor: "blue",
    rowTitleColor: "#0CBABA",
    rowContentColor: "#334155",
    arrowColor: "#334155",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div className="space-y-12 mb-24">
      <h4 className="font-semibold text-center text-xl text-primary">FAQs</h4>
      <div className="w-[85%] mx-auto max-w-3xl ">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default FAQs;
