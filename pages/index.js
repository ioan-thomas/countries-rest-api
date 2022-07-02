import { Container } from "@mui/system";
import {TextField } from "@mui/material";

export default function Home() {
	return (
		<Container maxWidth="xs">
			<TextField 
			color="text"
			id="filled-search"
			label='Search for a country...'
			type="search"
			sx={{maxWidth: 480, marginTop: 3, minWidth: '100%', backgroundColor: 'hsl(0, 0%, 100%)', }}
			/>
		</Container>
	);
}
