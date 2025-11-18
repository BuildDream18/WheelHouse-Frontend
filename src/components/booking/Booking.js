import React, { useState } from 'react';
import Confirmation from './Confirmation';
import './Booking.css';

const customHomesSteps = [
  {
    title: 'What stage are you in?',
    options: [
      'Just exploring ideas',
      'Have land but need plans',
      'Ready to start construction soon',
      'Already have plans & permits',
    ],
    name: 'stage',
  },
  {
    title: 'What is your ideal timeline for moving in?',
    options: [
      'Within 12–18 months',
      'Within 18–24 months',
      'More than 24 months',
    ],
    name: 'timeline',
  },
  {
    title: 'What is your estimated budget for the project?',
    options: [
      '$650K – $900K',
      '$900K – $1.2M',
      '$1.2M+',
      'Not sure yet',
    ],
    name: 'budget',
  },
];

const renovationSteps = [
  {
    title: 'What is your primary goal for this renovation?',
    options: [
      'Modernizing outdated spaces',
      'Increasing home value',
      'Adding more space or functionality',
      'Enhancing energy efficiency',
    ],
    name: 'goal',
  },
  {
    title: 'What is your estimated budget for this renovation?',
    options: [
      '$100K – $200K',
      '$200K – $350K',
      '$350K – $500K',
      '$500K+',
    ],
    name: 'budget',
  },
  {
    title: 'What is your ideal timeline for completion?',
    options: [
      'Less than 6 months',
      'Within 6–12 months',
      'Within 12–24 months',
      'More than 24 months',
    ],
    name: 'timeline',
  },
];

const firstStep = {
  title: 'What do you need help with?',
  options: ['Custom Homes', 'Renovation'],
  name: 'help',
};

export default function Scheduling() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const selectedHelp = answers.help;
  let stepsToUse = [firstStep];
  let totalSteps = [firstStep, ...customHomesSteps];
  if (selectedHelp === 'Custom Homes') {
    stepsToUse = [firstStep, ...customHomesSteps];
    totalSteps = [firstStep, ...customHomesSteps];
  } else if (selectedHelp === 'Renovation') {
    stepsToUse = [firstStep, ...renovationSteps];
    totalSteps = [firstStep, ...renovationSteps];
  }
  
  const progressPercent = ((step + 1) / totalSteps.length) * 100;
  
  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };
  
  const handleNext = () => {
    if (step === 0) {
      setAnswers({ help: answers.help }); // Clear other answers
      setStep(1);
    } else if (step < stepsToUse.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="exploration-root">
      {completed ? (
        <Confirmation bookingAnswers={answers} />
      ) : (
        <>
          <div className="exploration-left">
            <div className="exploration-video-card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_mNolk4CCDA"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
          <div className="exploration-right">
            <div className="exploration-card">
              <div className="exploration-desc">
                <b>Answer a few quick questions</b> to help us understand your Vision, Budget, and Timeline. This will ensure we’re the perfect match to create a home designed just for you.
              </div>
              <hr className="exploration-divider" />
              <div className="exploration-title">{stepsToUse[step].title}</div>
              <div className="exploration-progress">
                <div
                  className="exploration-progress-bar"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="exploration-options">
                {stepsToUse[step].options.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={stepsToUse[step].name}
                      value={option}
                      checked={answers[stepsToUse[step].name] === option}
                      onChange={handleOptionChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
              <button
                className="exploration-next-btn"
                onClick={handleNext}
                disabled={!answers[stepsToUse[step].name]}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}