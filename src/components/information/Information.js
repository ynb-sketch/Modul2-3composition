// src/Information.js
import React from 'react';
import './Information.module.css';

export const Information = ({ isDraw, currentPlayer, isGameEnded }) => {
	let status = '';
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <div className="information">{status}</div>;
};
