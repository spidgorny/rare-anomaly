export default function FilePage(props: any) {
	return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
