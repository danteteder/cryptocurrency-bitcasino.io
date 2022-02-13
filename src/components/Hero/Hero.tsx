import React from 'react';
import styles from "./Hero.module.scss";

interface HeroProps {

}

export const Hero: React.FC<HeroProps> = () => {
	return (
		<div className={styles.container}>
			<h1>Now you can track all your cryptos here!</h1>
			<p>Just enter the cryptocurrency code on the form to the right.</p>
		</div>
	)
}