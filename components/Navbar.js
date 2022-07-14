import Link from "next/link";

import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export function Navbar({changeMode}) {
    const theme = useTheme()
    return (
        <AppBar position="sticky" sx={{backgroundColor: theme.palette.primary.main, boxShadow: theme.palette.boxShadow}}>
            <Toolbar sx={{minHeight: '76px'}}>

                <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link href='/'>
                        <Typography variant='h5' sx={{fontSize: [18, 24], '&:hover':{cursor: 'pointer'}}}>Where in the world?</Typography>
                    </Link>
                    <Box component='div' sx={{display: 'flex', alignItems: 'center', '&:hover':{cursor: 'pointer'}}}
                    onClick={changeMode} 
                    >{ theme.palette.mode === 'light' ? 
                        <Brightness4Icon 
                        fontSize="small"
                        sx={{mr: 0.350, pb: 0.3, color: 'text.primary'}}
                        />
                        
                        : 
                        <Brightness7Icon 
                        fontSize="small" 
                        sx={{mr: 0.350, pb: 0.3, color: 'text.primary'}}
                        /> 
                    }<Typography variant='body1' sx={{fontSize: 12, fontWeight: 600}}>{theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode</Typography>
                    </Box>
                </Container>

            </Toolbar>
        </AppBar>
    )
}
