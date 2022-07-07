import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const OneCard = ({name, population, region, capital, flags}) => {
    return (  
        // output one card. In other component, map through array and use this for every one.
        <Card sx={{ maxWidth: 345, minHeight: '336px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={flags.svg || flags.png}
            alt={name + ' flag'}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" >
              {name}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span'>
              <Box fontWeight="600">Population: </Box>{population}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span'>
              <Box fontWeight="600">Region: </Box>{region}
            </Typography>
            <Typography variant="body1" color="text.primary" component='span'>
              <Box fontWeight="600">Capital: </Box>{capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}
 
export default OneCard;
