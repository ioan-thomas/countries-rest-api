import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar  sx={{minHeight: '76px'}}>
                <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5">Where in the world?</Typography>
                    <div style={{display: 'flex'}}>
                        <DarkModeOutlinedIcon 
                        fontSize="small"
                        sx={{mr: 0.350, pb: 0.3}}
                        />
                        <Typography variant='body1' sx={{fontSize: 12, fontWeight: 600}}>Dark Mode</Typography>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
