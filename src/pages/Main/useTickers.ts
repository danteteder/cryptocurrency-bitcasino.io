import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

interface ResponseData {
	markets: Array<
		{
			marketSymbol: string,
			ticker: {
				lastPrice: string;
			}
		}
	>
}

export interface TickerData {
	name: string;
	price?: string;
}

// hook that contains module logic
export const useTickers = () => {
	// tickers to be fetched
	const [tickers, setTickers] = useState(['BTC', 'LTC', 'XMR']);

	// fetched tickers data
	const [tickersDataList, setTickersDataList] = useState<TickerData[]>([]);

	// gql query for fetching ticker prices, expects symbols variable to be passed 
	const query = gql`
		query price($symbols: [String!]!) {
			markets(filter: { baseSymbol: {_in: $symbols } quoteSymbol: { _in: ["EUR"] } marketStatus: { _eq: Active } }) {
				marketSymbol
				ticker {
					lastPrice
				}
			}
		}
	`;

	const { loading } = useQuery<ResponseData>(
		query,
		{
			// passing variables to declared query
			variables: { symbols: tickers },

			// onComplete function is being called after request is completed
			onCompleted: ({ markets }) => {

				// for every ticker find price in the response and set new data
				const tickersData = tickers.map((ticker) => {

					const market = markets.find(market => market.marketSymbol.includes(ticker));

					return { name: ticker, price: market?.ticker.lastPrice };

				}, {} as Record<string, null | TickerData>);

				setTickersDataList(tickersData);
			},

		});

	const addTicker = (ticker: string) => {
		// if ticker already in the list, simply ignore it
		if (tickers.includes(ticker)) return;

		// add new ticker to tickers array
		// prices would be refetched since we are passing variables to useQuery hook
		setTickers(state => ([...state, ticker]));
	}

	const removeTicker = (tickerIndex: number) => {
		const newTickers = [...tickers];
		const newTickerData = [...tickersDataList];

		// remove tickers from list so it won't be fetched again
		newTickers.splice(tickerIndex, 1);
		// remove ticker data from list so it will instantly be removed, not after refetch
		newTickerData.splice(tickerIndex, 1);

		setTickers(newTickers);
		setTickersDataList(newTickerData);
	}

	return {
		addTicker,
		removeTicker,
		tickersDataList,
		isLoading: loading
	}
}