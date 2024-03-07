import { useState } from 'react';

export const InteractiveQuiz = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card-demo item shadow--tl " style={{
      padding: '20px',
      borderRadius: '10px',
    }}>
      <div className="card">
        <h2>Quick Quiz: Are You Ready to Dive In?</h2>
      </div>

      <div className="card__body " style={{
        fontSize: '1.5rem',
        display: 'flex',
      }}>
        <p>What does "Jifunze Sasa" mean in Swahili?</p>
      </div>

      <br />

      {showAnswer ? (
        <div className="card__body" style={{
          // padding: '20px',
        }}>
          <p className="" style={{
            fontSize: '1.5rem',
          }}>It means "Learn Now" - And that's exactly what we offer!</p>
        </div>
      ) : (
        <button className='button button--outline button--primary' onClick={() => setShowAnswer(true)}>Show Answer</button>
      )}
    </div>
  );
};