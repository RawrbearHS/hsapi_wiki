export default function Details({children, summary}) {
	return (
		<p>
			<details>
				<summary>{summary} <a><i>[expand]</i></a></summary>
				<br />
				{children}
			</details>
		</p>
	);
}
