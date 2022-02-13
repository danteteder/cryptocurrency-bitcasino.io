import React from 'react';
import { InputProps } from '../../types';
import styles from "./Input.module.scss";

interface CustomInputProps {
	label?: string;
}

export const Input: React.FC<CustomInputProps & InputProps> = ({ label, ...props }) => {
	return (
		<div className={styles.container}>
			{label && <label>{label}</label>}
			<input {...props} />
		</div>
	)
}