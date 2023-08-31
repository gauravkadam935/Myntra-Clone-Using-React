import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function AddCart(props) {
    const {title,id,price,description,thumbnail,rating,rate,category, count,onClick,buyItem,increaseProduct,decreaseProduct,message} = props;

    
    const deleteFunction=()=>{
        onClick(id);
      }
      const payButton=()=>{
        buyItem(id);
      }
      const increaseItem=()=>{
        increaseProduct(id);
      }
      const decreaseItem=()=>{
        decreaseProduct(id);
      }

  const theme = useTheme();

  return (
    <Card sx={{display:{xs:"block",md:"flex",lg:"flex",xl:"flex"}, boxShadow: 5,margin:3,gap:3 }}>
      <Box >
      <CardMedia
        component="img"
        sx={{ width: 250,objectFit: "contain" }}
        image={thumbnail}
        alt="img"
      />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign:"left"}}>
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle3" color="text.secondary" component="div" sx={{width:200}} noWrap>
            {description}
          </Typography>
        </CardContent>
        <CardContent>
            <Typography variant="subtitle1" component="div" >
                {price}
            </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={decreaseItem} disabled={count==1}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <Typography variant="subtitle1" component='div'>
            <Button variant="outlined">Qty {count}</Button>
            </Typography>
          <IconButton aria-label="next" onClick={increaseItem} >
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
        <CardContent>
        <Typography variant="subtitle1" component='div'>
            <Button variant="contained" sx={{bgcolor:'red'}} onClick={deleteFunction}>Remove</Button>
            </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
  );
}
