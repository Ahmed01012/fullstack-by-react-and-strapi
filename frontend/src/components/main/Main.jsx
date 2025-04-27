// @ts-nocheck
import { useTheme } from '@emotion/react';
import { Box, Container, Rating, Stack, Typography, Grid, Dialog, IconButton } from '@mui/material';
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
import { useGetProductByNameQuery } from '../../redux/product';

export default function Main() {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [category, setCategory] = useState("all");

    const handleCategoryChange = (event, newCategory) => {
        if (newCategory !== null) {
            setCategory(newCategory);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const theme = useTheme();

    // تحديد API بناءً على الفئة المختارة
    const categoryFilters = {
        all: "",
        men: "filters[productCategory][$eq]=men",
        women: "filters[productCategory][$eq]=women",
        accessories: "filters[productCategory][$eq]=Accessories"
    };

    const queryString = `products?populate=*&${categoryFilters[category]}`;

    // استدعاء API لجلب البيانات
    const { data, error, isLoading } = useGetProductByNameQuery(queryString);

    if (isLoading) return <Typography variant='h6'>Loading...</Typography>;
    if (error) return <Typography variant='h6'>Error fetching data: {error.message}</Typography>;

    return (
        <Container maxWidth="lg" sx={{
            width: "100%",
            '@media (max-width:600px)': { maxWidth: '100vw', padding: 0, margin: 0 },
        }}>
            {/* الفئات */}
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}
                sx={{ mt: 8, "@media(max-width:400px)": { textAlign: "center", justifyContent: "center" } }}
            >
                <Box>
                    <Typography variant='h6'>Selected Products</Typography>
                    <Typography variant='body1' fontWeight={300}>
                        All Our New Arrivals In A Exclusive Brand Selection
                    </Typography>
                </Box>
                <Box>
                    <ToggleButtonGroup
                        color='error'
                        value={category}
                        exclusive
                        onChange={handleCategoryChange}
                        aria-label="Category Selection"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            ".Mui-selected": {
                                border: "1px solid rgba(233 , 69 , 96 , 0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial",
                            }
                        }}
                    >
                        <ToggleButton value="all" sx={{ color: theme.palette.text.primary }}>All Products</ToggleButton>
                        <ToggleButton value="men" sx={{ color: theme.palette.text.primary }}>MEN</ToggleButton>
                        <ToggleButton value="women" sx={{ color: theme.palette.text.primary }}>WOMEN</ToggleButton>
                        <ToggleButton value="accessories" sx={{ color: theme.palette.text.primary }}>ACCESSORIES</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Stack>

            {/* عرض المنتجات */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {data?.data?.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{
                            maxWidth: "100%", height: 450, transition: "0.3s",
                            ":hover .MuiCardMedia-root": { transform: "scale(1.05)", rotate: "1deg", transition: "0.5s" },
                            '@media (max-width:600px)': { width: "300px" }
                        }}>
                            <CardMedia
                                sx={{ height: { xs: 200, md: 290 }, '@media (max-width:600px)': { width: "100%" } }}
                                image={`${import.meta.env.VITE_BASE_URL}${item.productImg?.[0]?.url || ''}`}
                                title={item.productTitle}
                            />

                            <CardContent>
                                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={"space-around"} alignItems={"center"} sx={{ mb: 1 }}>
                                    <Typography gutterBottom variant='h5'>{item.productTitle}</Typography>
                                    <Typography variant='subtitle1' sx={{ fontSize: "18px" }}>${item.productPrice}</Typography>
                                </Stack>
                                <Typography variant='body2' color="text.secondary">{item.productDescription}</Typography>
                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button onClick={() => handleClickOpen(item)} sx={{ textTransform: "capitalize" }} size="large">
                                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize='small' /> Add To Cart
                                </Button>
                                <Rating precision={0.5} name="read-only" value={item.productRating || 0} readOnly />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* عرض تفاصيل المنتج */}
            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 }, textAlign: { xs: "center", sm: "left" }, pr: 1 } }}
                onClose={handleClose}
                open={open}
            >
                <IconButton sx={{ position: "absolute", top: 0, right: 10, ":hover": { rotate: "360deg", transition: "1s", color: "red" } }} onClick={handleClose}>
                    <Close />
                </IconButton>
                {selectedProduct && (
                    <ProductDetails
                        images={selectedProduct?.productImg?.map(img => `${import.meta.env.VITE_BASE_URL}${img.url}`) || []}
                        title={selectedProduct?.productTitle || ""}
                        price={selectedProduct?.productPrice || ""}
                        description={selectedProduct?.productDescription || ""}
                    />
                )}
            </Dialog>
        </Container>
    );
}
