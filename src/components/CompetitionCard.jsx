import React, { useState, useEffect } from 'react';
import './../styles/style.css'

const CompetitionCard = ({ competition }) => {
  const deadline = new Date('2023-06-30T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isParticipant, setIsParticipant] = useState(false);

  function calculateTimeLeft() {
    const difference = deadline - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleButtonClick = () => {
    setIsParticipant(true);
  };

  return (
    <div className="card">
      <div className="title">
        <h2>{competition.title}</h2>
        <p>{competition.startTime}</p>
      </div>
      <div className="description">
        <h2>{competition.description}</h2>
        <div className="desSpan">
          <span>Price: {competition.price}</span>
          <span>{competition.participants} participants enrolled</span>
        </div>
      </div>
      <div className="timer">
      <h2>Registration ends in:</h2>
      {isParticipant ? (
        <div>
          <p>You are participant!</p>
        </div>
      ) : (
        <p>
          {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes
        </p>
      )}
      <button onClick={handleButtonClick}>Participate</button>
      </div>
</div> 
  );
};

export default CompetitionCard;



   