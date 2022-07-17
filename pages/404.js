import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link as MuiLink } from '@mui/material'

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";



export default function NotFound() {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 4000)
    },[router])

  return (
    <Container maxWidth="lg">
        <Box component='div' sx={{marginTop: 9, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Oooops! That page cannot be found :(</Typography>
        <p>Redirecting to <Link href='/'>Homepage</Link> to view more countries.</p>
        </Box>
    </Container>
  )
}
