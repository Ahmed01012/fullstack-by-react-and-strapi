// @ts-nocheck
import { useTheme } from '@emotion/react';
import { Box, Container, Rating, Stack, Typography ,Grid, Dialog , IconButton} from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetProductByNameQuery } from '../../redux/product'

// import React from 'react';



export default function Main() {

    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});


    // @ts-ignore
    const handleAlignment = (event,newValue) => {
        setmyData(newValue)
    };


    const [setHoverIndex] = useState(null)

    const handleClose = () => {
        setOpen(false); // Close the dialog when requested
    };

    const handClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    }

    const theme = useTheme()

    const AllProductAPI='products?populate=*'
    const MenProductAPI='products?populate=*&filters[productCategory][$eq]=men'
    const WomenProductAPI='products?populate=*&filters[productCategory][$eq]=women'
    const AccessoriesProductAPI='products?populate=*&filters[productCategory][$eq]=Accessories'

    const [myData, setmyData] = useState(AllProductAPI);
    const { data, error, isLoading } = useGetProductByNameQuery(myData)

    if (isLoading) {
        return <Typography variant='h6'>Loading.........</Typography>;
    }
    
    if (error) {
        return <Typography variant='h6'>Error fetching data: {error.message}</Typography>;
    }

    if (data){
        console.log(data.data)
    }

    if (data){
        return (
            <Container 
                maxWidth="lg" 
        sx={{
        width: "100%", // Ensure full width
        '@media (max-width:600px)': {
          maxWidth: '100vw', // Full viewport width for screens smaller than 600px
          padding: 0, // Remove padding for full width
          margin: 0, // Remove margin for full width
        },
        }}
            >
    
                {/* this the first components includes buttons */}
                <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}
                sx={{ mt:8 ,
                "@media(max-width:400px)":{
                    textAlign:"center",justifyContent:"center"
                }
                }}>
                    <Box>
                        <Typography variant='h6'>Selected Products</Typography>
                        <Typography variant='body1' fontWeight={300}>
                            All Our New Arrivals In A Exclusive Brand Selection
                        </Typography>
                    </Box>
                    <Box>
                    <ToggleButtonGroup
                        color='error'
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{ 
                            display:"flex",
                            flexWrap:"wrap",
                            gap:2,
                            ".Mui-selected":{
                                border:"1px solid rgba(233 , 69 , 96 , 0.5) !important",
                                color:"#e94560",
                                backgroundColor:"initial",
                            }
                        }}
                        >
                        <ToggleButton 
                            className='myButton' 
                            value={AllProductAPI} 
                            aria-label="left aligned"
                            sx={{ color:theme.palette.text.primary }}>
                            All Products
                        </ToggleButton>
                        <ToggleButton 
                            className='myButton' 
                            value={MenProductAPI} 
                            aria-label="centered"
                            sx={{ color:theme.palette.text.primary }}>
                            MEN
                        </ToggleButton>
                        <ToggleButton 
                            className='myButton' 
                            value={WomenProductAPI} 
                            aria-label="right aligned"
                            sx={{ color:theme.palette.text.primary }}>
                            WOMEN
                        </ToggleButton>
                        <ToggleButton 
                            className='myButton' 
                            value={AccessoriesProductAPI} 
                            aria-label="justified"
                            sx={{ color:theme.palette.text.primary }}>
                            ACCESSORIES
                        </ToggleButton>
                    </ToggleButtonGroup>
                    </Box>
                </Stack>
    
                {/* this the second components included the card form apis   */}
                {/* <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}> */}
                <Grid container spacing={4} sx={{ mt:4 }}>
                    {data?.data?.map((item, index) => (
                            
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                            <Card sx={{ 
                                maxWidth: "100%",
                                height:450,
                                transition:"0.3s" ,
                                ":hover .MuiCardMedia-root":{
                                    transform:"scale(1.05)",
                                    rotate:"1deg",
                                    transition:"0.5s"
                                    } ,
                                    '@media (max-width:600px)':{width:"300"}
    
                                }}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <CardMedia
                                        sx={{ height:{ xs: 200, md: 290 } , '@media (max-width:600px)':{width:"100%",} }}
                                        image={`${import.meta.env.VITE_BASE_URL}${item.productImg[0].url}`}
                                        title="Order Now"
                                    />
    
                                    <CardContent>
                                        <Stack 
                                        direction={{xs: 'column', sm: 'row'}}
                                        justifyContent={"space-around"}
                                        alignItems={"center"}
                                        sx={{ mb:1,'@media (max-width:400px)':{textAlign:"center"} }}
                                        >
                                            <Typography gutterBottom variant='h5'>
                                                {item.productTitle}
                                            </Typography>
                                            <Typography variant='subtitle1' sx={{ fontSize:"18px" }} >
                                                ${item.productPrice}
                                            </Typography>
                                        </Stack>
    
                                        <Typography variant='body2' color="text.secondary" sx={{ '@media (max-width:400px)':{textAlign:"center"} }}>
                                            {item.productDescription}
                                        </Typography>
                                    </CardContent>
    
                                    <CardActions sx={{ 
                                        justifyContent:"space-between",
                                        '@media (max-width:400px)':{textAlign:"center",flexWrap:"wrap",justifyContent:"center"}
                                        
                                        }}>
                                        <Button onClick={() => handClickOpen(item)} sx={{ textTransform:"capitalize" }} size="large">
                                            <AddShoppingCartIcon sx={{ mr:1, }} fontSize='small'/>
                                            Add To Cart
                                        </Button> 
                                        <Rating precision={0.5} name="read-only" value={item.productRating || 0} readOnly />
                                    </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                    
                    
                {/* </Stack> */}
    
                <Dialog 
                    sx={{ 
                        ".MuiPaper-root": {minWidth: {xs:"100%" , md:800} ,  textAlign:{xs:"center", sm:"left"} , pr:1  }
                    }}
                    onClose={handleClose} 
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                        <IconButton
                            sx={{
                            position: "absolute",
                            top: 0,
                            right: 10,
                            ":hover": { rotate: "360deg", transition: "1s", color: "red" },
                            }}
                            onClick={handleClose}
                        >
                            <Close />
                        </IconButton>
                        {selectedProduct && (
                        <ProductDetails
                            images={selectedProduct?.images || []}
                            title={selectedProduct?.title || ""}
                            price={selectedProduct?.price || ""}
                            description={selectedProduct?.description || ""}
                        /> 
                    )}
    
                </Dialog>
    
    
    
    
    
    
            </Container>
        )
    }





}                                           