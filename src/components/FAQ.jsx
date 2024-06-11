import React from "react";
// import "../styles.css";

const FAQ = () => {
  const handleFAQClick = () => {
    alert("Displaying FAQs!");
  };

  return (
    <div className="faq">
      <div className="d" onClick={handleFAQClick}>
        Let's take a look at things you have on your mind.
      </div>
      <div className="question1">
        <div className="q1">
          Do you possess the knowledge to help me with my project?
        </div>
        <div className="alolo"></div>
      </div>
      <div className="question2">
        <div className="q2">
          Do you also provide a creative concept for videos and images?
        </div>
      </div>
      <div className="question3">
        <div className="q3">
          Do you provide only design for my project, or development as well?
        </div>
      </div>
      <div className="question4">
        <div className="q4">How can I get a proposal?</div>
      </div>
    </div>
  );
};

export default FAQ;
