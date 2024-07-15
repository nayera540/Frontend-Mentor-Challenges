const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: `Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.`,
  },
  {
    title: "Is Frontend Mentor free?",
    text: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!`,
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`,
  },
];

function App() {
  return (
    <div className="App">
      <Background />
      <MainSection />
      {/* <Footer/> */}
    </div>
  );
}

function Background() {
  return <div className="background"></div>;
}

function MainSection() {
  return (
    <div className="accordion__main">
      <FaqsTitle />
      <Accordion />
    </div>
  );
}

function FaqsTitle() {
  return (
    <div className="accordion__title">
      <span className="title__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="41"
          fill="none"
          viewBox="0 0 40 41"
        >
          <path
            fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
          />
        </svg>
      </span>
      <h1>FAQs</h1>
    </div>
  );
}

function Accordion(){
  return(<div className="accordion">
    {}
  </div>);
}

function AccordionItem() {}

function Footer() {
  return (
    <footer>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        {" "}
        Frontend Mentor{" "}
      </a>
      . Coded by <a href="#">Nayera Hazem</a>.
    </footer>
  );
}

export default App;
