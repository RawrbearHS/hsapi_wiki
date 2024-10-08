{ /* Vertical table format which includes Player Version data */}
export default function KeyValueTable({data}) {
	let tableElements = [];
	if (data) {
		Object.keys(data).forEach((key) => {
			tableElements.push(
				<tr>
					<th><code>{key}</code></th>
					<td><code>{data[key]}</code></td>
				</tr>
			);
		});
	}

	return (
		<table className="table-vertical">
			{tableElements}
		</table>
	);
}
