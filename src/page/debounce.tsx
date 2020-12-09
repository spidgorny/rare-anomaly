import { useEffect, useState } from 'react';
// @ts-ignore
import debounceRender from 'react-debounce-render';

function Debounce() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		window.requestAnimationFrame(() => {
			setCounter(counter + 1);
		});
	});

	return <p>{counter}</p>;
}

export default debounceRender(Debounce, 1000, { maxWait: 1000 });
