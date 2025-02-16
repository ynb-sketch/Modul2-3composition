import React from 'react';
import styles from './Information.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.information}>{status}</div>;
};

export default InformationLayout;
