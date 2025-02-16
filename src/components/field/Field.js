import React from 'react';
import FieldLayout from './FieldLayout';

const Field = ({ cells, onCellClick }) => {
	return <FieldLayout cells={cells} onCellClick={onCellClick} />;
};

export default Field;
