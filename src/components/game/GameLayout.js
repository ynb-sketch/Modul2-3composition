import React from 'react';
import styles from './Game.module.css';

const GameLayout = ({ children }) => {
	return <div className={styles.game}>{children}</div>;
};

export default GameLayout;
