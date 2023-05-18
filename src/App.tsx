import React, { useState } from 'react';
import Ball from './ball/ball';
import './App.css'

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const generateNumbers = () => {
        const newNumbers: number[] = [];
        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }
        setNumbers(newNumbers.sort((a, b) => a - b));
    };

    return (
        <div className="App">
            <h1>Лотерея "5 из 36"</h1>
            <button onClick={generateNumbers}>Новые числа</button>
            <div className="balls-container">
                {numbers.map((number) => (
                    <Ball key={number} number={number} />
                ))}
            </div>
        </div>
    );
};

export default App;
