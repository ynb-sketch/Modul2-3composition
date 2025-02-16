import React from 'react';
import styles from './Field.module.css';

const FieldLayout = ({ cells, onCellClick }) => {
	return (
		<div className={styles.field}>
			{cells.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

export default FieldLayout;
