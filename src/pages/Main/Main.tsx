import React from 'react';
import { AddTickerForm } from '../../components/AddTickerForm/AddTickerForm';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { TickersList } from '../../components/TickersList/TickersList';
// import styles from scss module, so styles are scoped to this page
import styles from "./Main.module.scss";
import { useTickers } from './useTickers';

interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = () => {
	// call useTicker hook to use this modules logic
	const { addTicker, removeTicker, tickersDataList, isLoading } = useTickers();

	return (
		<>
			<Header />
			<main className={`container ${styles.container}`}>
				<img src="./assets/figure.png" className={styles.figure} alt="figure" />
				<div className={styles.row}>
					<Hero />
					<AddTickerForm onSubmit={ticker => addTicker(ticker)} isLoading={isLoading} />
				</div>
				<div className={styles.row}>
					<TickersList tickersData={tickersDataList} onRemove={(index) => removeTicker(index)} isLoading={isLoading} />
				</div>
			</main>
			<Footer />
		</>
	)
}