import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../product";

interface Props{
    product : Product;
}

export default function ProductCard({product}:Props){
    return(
        <Card>
            <CardHeader
            avatar={
                <Avatar sx= {{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight:'bold', color:'primary.main'}
            }}
            />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', bgcolor:'white' }}
        image={product.pictureUrl}
        title={product.name}

      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" >
        ₹{product.price}
        </Typography>
        <Typography variant="body2" color="white">
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
    )
}