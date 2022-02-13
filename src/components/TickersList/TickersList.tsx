import React from 'react';
import { TickerData } from '../../pages/Main/useTickers';
import { Loader } from '../Loader/Loader';
import styles from "./TickersList.module.scss";

interface TickersListProps {
	tickersData: TickerData[];
	onRemove: (index: number) => any;
	isLoading?: boolean;
}

export const TickersList = ({ onRemove, tickersData, isLoading }: TickersListProps) => {
	return (
		<Loader isLoading={isLoading}>
			<div className={styles.list}>
				{/* map over the tickersData array to render ticker cards */}
				{
					tickersData.map((tickerData, index) => (
						<div className={styles.tickerCard} key={tickerData.name}>
							<div className={styles.left}>
								<img src="./assets/icon.svg" alt="ticker icon" />
								<div className={styles.data}>
									<h6>
										{tickerData.name}
									</h6>
									<p>
										{/* if ticker price exists format it with euro sign, otherwise ticker was not found */}
										{tickerData.price ? `${Number(tickerData.price).toFixed(2)} \u20AC` : 'Not found'}
									</p>
								</div>
							</div>
							<div className={styles.remove} onClick={() => onRemove(index)}>
								{/* close unicode character */}
								&#10006;
							</div>
						</div>
					))
				}
			</div>
		</Loader>
	)
}