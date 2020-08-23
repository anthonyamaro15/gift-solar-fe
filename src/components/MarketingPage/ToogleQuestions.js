import "../../sass/_toggleQuestions.scss";
import React, { useState } from "react";
import SlideToggle from "react-slide-toggle";

const ToggleQuestions = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { answers, question } = data;

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    console.log("check hre ", showAnswer);
  };
  return (
    <div className="toggleAnswer" onClick={toggleAnswer}>
      <SlideToggle
        collapsed
        duration={800}
        render={({ onToggle, setCollapsibleElement, progress }) => (
          <div className="my-collapsible" onClick={onToggle}>
            <p className="question">{question}</p>
            <div
              className="my-collapsible__content"
              ref={setCollapsibleElement}
            >
              <div
                className="my-collapsible__content-inner"
                style={{
                  transform: `translateY(${Math.round(
                    20 * (-1 + progress)
                  )}px)`,
                }}
              >
                <ul className="answer">
                  {answers.map((answer, i) => (
                    <li key={i}>{answer.answer}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ToggleQuestions;
