import React, { useState } from 'react';
import GameLayout from './GameLayout';
import Field from '../field/Field';
import Information from '../information/Information';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		checkGameStatus(newField);
	};

	const checkGameStatus = (newField) => {
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

		const isWinner = WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				newField[a] && newField[a] === newField[b] && newField[a] === newField[c]
			);
		});

		if (isWinner) {
			setIsGameEnded(true);
			return;
		}

		if (newField.every((cell) => cell)) {
			setIsDraw(true);
			return;
		}

		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	const statusMessage = isDraw
		? 'Ничья'
		: isGameEnded
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return (
		<GameLayout>
			<Information status={statusMessage} />
			<Field cells={field} onCellClick={handleCellClick} />
			<button onClick={resetGame}>Начать заново</button>
		</GameLayout>
	);
};
