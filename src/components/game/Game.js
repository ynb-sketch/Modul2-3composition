// src/Game.js
import React, { useState } from 'react';
import { Field } from '../field/Field';
import { Information } from '../information/Information';
import './Game.module.css';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWinner(newField)) {
			setIsGameEnded(true);
		} else if (newField.every((cell) => cell)) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const checkWinner = (field) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === currentPlayer),
		);
	};

	const resetGame = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<div className="game">
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={handleCellClick} />
			<button onClick={resetGame}>Начать заново</button>
		</div>
	);
};
