import React from 'react';
import styles from "./Header.module.scss";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<img src="./assets/logo.svg" alt="logo" />
			</div>
		</header>
	)
}