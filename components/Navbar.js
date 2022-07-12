import Link from "next/link";

import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export function Navbar() {
    const theme = useTheme()
    return (
        <AppBar position="sticky" sx={{backgroundColor: theme.palette.primary, boxShadow: theme.palette.boxShadow}}>
            <Toolbar  sx={{minHeight: '76px'}}>

                <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link href='/'>
                        <Typography variant='h5' sx={{fontSize: [18, 24], '&:hover':{cursor: 'pointer'}}}>Where in the world?</Typography>
                    </Link>

                    <Box component='div' sx={{display: 'flex', alignItems: 'center', '&:hover':{cursor: 'pointer'}}}>
                        <DarkModeOutlinedIcon 
                        fontSize="small"
                        sx={{mr: 0.350, pb: 0.3}}
                        />
                        <Typography variant='body1' sx={{fontSize: 12, fontWeight: 600}}>Dark Mode</Typography>
                    </Box>
                </Container>

            </Toolbar>
        </AppBar>
    )
}
