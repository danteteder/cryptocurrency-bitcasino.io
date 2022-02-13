import React from 'react';
import styles from "./Loader.module.scss";

interface LoaderProps {
	isLoading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ children, isLoading }) => {
	return (
		<div className={styles.container}>
			{isLoading && <div className={styles.loaderContainer} />}
			{children}
		</div>
	)
}