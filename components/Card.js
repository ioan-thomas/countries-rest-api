import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


const OneCard = ({name, population, region, capital, flags}) => {
  
  const theme = useTheme()
    return (  
      <Link href={"/[slug]"} as={`/${name.toLowerCase()}`}>
        <Card 
        sx={{ maxWidth: 345, minHeight: '336px', 
        transition: 'all 0.3s ease', '&:hover':{transform: 'rotate(3deg)', cursor: 'pointer', backgroundColor: 'hoverColor.primary'}, backgroundColor: 'primary.main',
        boxShadow: theme.palette.boxShadow.primary}}>
            <Image
              component="img"
              height="160" 
              width='264'
              src={flags.svg || flags.png}
              alt={name + ' flag'}
              layout="responsive"
              objectFit='cover'
              priority={flags.svg === 'https://flagcdn.com/gu.svg' ? true : false}
            />
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: '16px'}}>
              {name}
            </Typography>
            <Typography variant="body1" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Population: </Box>{population.toLocaleString()}
            </Typography>
            <Typography variant="body1" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Region: </Box>{region}
            </Typography>
            <Typography variant="body1" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Capital: </Box>{capital}
            </Typography>
          </CardContent>
      </Card>
      </Link>
    );
}
 
export default OneCard;
