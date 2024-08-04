import { useState, useRef, useEffect } from "react";

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
    title: "How can I get help if I'm stuck on a challenge?",
    text: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`,
  },
];

function App() {
  return (
    <div className="App">
      <Background />
      <MainSection />
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

function Accordion() {
  const [openItems, setOpenItems] = useState(faqs.map((faq, index) => index === 0));

  const handleToggle = (index) => {
    setOpenItems((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          isOpen={openItems[i]}
          onToggle={() => handleToggle(i)}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `fit-content`;
      contentRef.current.style.padding = "1rem 0";
    } else {
      contentRef.current.style.maxHeight = "0";
      contentRef.current.style.padding = "0";
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion__item ${isOpen ? "open" : "closed"}`}
      onClick={onToggle}
    >
      <div className="accrodion__header">
        <p className="item__title">{title}</p>
        <p className="item__icon">
          {isOpen ? (
            <span className="icon__open">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            </span>
          ) : (
            <span className="icon__closed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 1 1-1.875 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 1 1 1.875 0v3.75h3.75a.938.938 0 1 1 0 1.876Z"
                />
              </svg>
            </span>
          )}
        </p>
      </div>
      <div
        className="accordion__content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? "fit-content" : "0",
          padding: isOpen ? "1rem 0" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease-out, padding 0.5s ease-out",
        }}
        aria-hidden={!isOpen}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default App;
