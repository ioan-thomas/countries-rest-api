import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Image from 'next/image';


const OneCard = ({name, population, region, capital, flags}) => {
    return (  
        <Card sx={{ maxWidth: 345, minHeight: '336px'}}>
        <CardActionArea>
            <Image
              component="img"
              height="160"
              width='264'
              src={flags.svg || flags.png}
              alt={name + ' flag'}
              layout="responsive"
              objectFit='cover'
            />
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: '16px'}}>
              {name}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Population: </Box>{population.toLocaleString()}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Region: </Box>{region}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span' sx={{display: 'block'}}>
              <Box fontWeight="600" component='span'>Capital: </Box>{capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}
 
export default OneCard;
