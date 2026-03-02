"use client";

import { useState, useEffect, useMemo } from 'react';
import { cities, getRandomChoices, City } from '@/data/cities';

export default function GameBoard() {
    const [mounted, setMounted] = useState(false);

    // Game state
    const [questions, setQuestions] = useState<{ city: City, choices: string[] }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isGameOver, setIsGameOver] = useState(false);

    const totalQuestions = 5;

    // Initialize game
    const initializeGame = () => {
        // Shuffle all cities and pick 'totalQuestions' number of cities
        const shuffledCities = [...cities].sort(() => 0.5 - Math.random());
        const selectedCities = shuffledCities.slice(0, totalQuestions);

        // Generate choices for each selected city
        const generatedQuestions = selectedCities.map(city => ({
            city,
            choices: getRandomChoices(city, 4)
        }));

        setQuestions(generatedQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsGameOver(false);
    };

    useEffect(() => {
        setMounted(true);
        initializeGame();
    }, []);

    if (!mounted || questions.length === 0) return null;

    const currentQuestion = questions[currentIndex];
    const isAnswerRevealed = selectedAnswer !== null;

    const handleSelectAnswer = (choice: string) => {
        if (isAnswerRevealed || isGameOver) return;

        setSelectedAnswer(choice);

        const isCorrect = choice === currentQuestion.city.name;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        // Wait 1.5s before moving to the next question
        setTimeout(() => {
            if (currentIndex + 1 < totalQuestions) {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setIsGameOver(true);
            }
        }, 1500);
    };

    if (isGameOver) {
        return (
            <div className="glass animate-fade-in" style={{ padding: '3rem', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
                <h2 className="heading-1" style={{ fontSize: '2rem' }}>Game Over!</h2>
                <p className="text-muted" style={{ fontSize: '1.25rem', margin: '1rem 0 2rem' }}>
                    You scored {score} out of {totalQuestions}
                </p>

                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>
                    {score === totalQuestions ? '🏆' : score > totalQuestions / 2 ? '⭐' : '😅'}
                </div>

                <button className="btn btn-primary" style={{ width: '100%' }} onClick={initializeGame}>
                    Play Again
                </button>
            </div>
        );
    }

    return (
        <div className="glass animate-fade-in" style={{ padding: '2rem', maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* HUD line */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <span className="text-muted" style={{ fontWeight: 600 }}>Question {currentIndex + 1} of {totalQuestions}</span>
                <span style={{ fontWeight: 700, padding: '0.25rem 0.75rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    Score: {score}
                </span>
            </div>

            {/* Image container */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '65%', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                {/* We use an img tag instead of next/image to easily handle external unsplash links without configuring domains */}
                <img
                    src={currentQuestion.city.imageUrl}
                    alt="Guess the city"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
            </div>

            {/* Options grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {currentQuestion.choices.map((choice) => {

                    let buttonStateStyle = {};
                    if (isAnswerRevealed) {
                        const isThisCorrect = choice === currentQuestion.city.name;
                        const isThisSelected = choice === selectedAnswer;

                        if (isThisCorrect) {
                            buttonStateStyle = { background: 'var(--color-success)', borderColor: 'var(--color-success)', color: 'white' };
                        } else if (isThisSelected) {
                            buttonStateStyle = { background: 'var(--color-error)', borderColor: 'var(--color-error)', color: 'white' };
                        } else {
                            buttonStateStyle = { opacity: 0.5 };
                        }
                    }

                    return (
                        <button
                            key={choice}
                            onClick={() => handleSelectAnswer(choice)}
                            disabled={isAnswerRevealed}
                            className="btn"
                            style={{ ...buttonStateStyle, height: '4rem' }}
                        >
                            {choice}
                        </button>
                    );
                })}
            </div>

        </div>
    );
}
