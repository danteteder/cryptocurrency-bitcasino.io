import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';
import styles from "./AddTickerForm.module.scss";

interface AddTickerFormProps {
	onSubmit?: (ticker: string) => any;
	isLoading?: boolean;
}

export const AddTickerForm: React.FC<AddTickerFormProps> = ({ onSubmit, isLoading }) => {
	// state of the text field for tickers
	const [text, setText] = useState('');

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		// prevent default behavior of the browser
		e.preventDefault();

		// if passed onSubmit function and text exists, call it with trimmed uppercase text 
		onSubmit && text && onSubmit(text.toUpperCase().trim());

		// reset text field state
		setText('');
	}

	return (
		<Loader isLoading={isLoading}>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Input label="Cryptocurrency code" value={text} disabled={isLoading} onChange={(e) => setText(e.target.value)} />
					<button type="submit">
						Add
					</button>
				</form>
				<p className={styles.tos}>
					Use of the service is subject to terms and conditions.
				</p>
			</div>
		</Loader>
	)
}