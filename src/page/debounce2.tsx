import { PropsWithChildren, useEffect, useRef, useState } from 'react';
// @ts-ignore
import debounceRender from 'react-debounce-render';
import { oncePerSecond } from '../functions';

export function MyDebounce(props: PropsWithChildren<{ howOften: number }>) {
	const [children, setChildren] = useState(props.children);

	let timer = useRef(undefined as any);
	useEffect(() => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
		timer.current = setTimeout(() => {
			console.log('timer handler');
			setChildren(props.children); // re-render once
		}, props.howOften);

		if (oncePerSecond()) {
			// render anyway
			setChildren(props.children);
		}

		return () => clearTimeout(timer.current);
	}, [props.children]);

	return <>{children}</>;
}

export default function Debounce2() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		window.requestAnimationFrame(() => {
			setCounter(counter + 1);
		});
	});

	return (
		<MyDebounce howOften={1000}>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>+</button>
		</MyDebounce>
	);
}
