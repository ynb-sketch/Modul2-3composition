// src/Field.js
import React from 'react';
import './Field.css';

export const Field = ({ field, onCellClick }) => {
	return (
		<div className="field">
			{field.map((cell, index) => (
				<button key={index} className="cell" onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	);
};
