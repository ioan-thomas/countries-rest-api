import { AppBar, Toolbar, Typography } from "@mui/material";

export function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5">Where in the world?</Typography>
                <div></div>
            </Toolbar>
        </AppBar>
    )
}
