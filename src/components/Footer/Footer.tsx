import React from 'react';
import styles from "./Footer.module.scss";

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi eget augue consectetur tincidunt euismod vel nunc. Fusce sodales vitae ligula sed lobortis. Praesent orci risus, consectetur commodo urna et, tempus suscipit metus. Cras rutrum suscipit pellentesque. Praesent eget finibus risus. Suspendisse sollicitudin felis dignissim hendrerit mollis. Aliquam vel iaculis tellus.
			</div>
		</footer>
	)
}