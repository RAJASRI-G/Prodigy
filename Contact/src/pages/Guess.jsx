import React, { useState } from 'react';

function Guess() {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    };

    const handleGuessSubmit = (event) => {
        event.preventDefault();
        const userGuess = parseInt(guess);

        if (isNaN(userGuess) || userGuess < min || userGuess > max) {
            setFeedback('Please enter a valid number between 1 and 100.');
            return;
        }

        setAttempts(attempts + 1);

        if (userGuess === randomNumber) {
            setFeedback(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts + 1} attempts.`);
        } else if (userGuess < randomNumber) {
            setFeedback('Too low! Try again.');
        } else {
            setFeedback('Too high! Try again.');
        }

        setGuess('');
    };

    return (
        <div className="guess-container">
            <h1 className="guess-title">Guessing Game</h1>
            <p>Guess a number between {min} and {max}:</p>
            <form onSubmit={handleGuessSubmit}>
                <input
                    type="number"
                    value={guess}
                    onChange={handleGuessChange}
                    min={min}
                    max={max}
                    className="guess-input"
                />
                <button type="submit" className="guess-button">Submit Guess</button>
            </form>
            <p className="guess-feedback">{feedback}</p>
        </div>
    );
}

export default Guess;
