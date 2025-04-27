/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'


export default function ProductDetails({images, title, price, description}) {
    return (
        <Box sx={{ display:"flex" , alignItems:"center", justifyContent:"space-between",gap:2.5 ,flexDirection:{xs:"column" , sm:"row"}}}>
            <Box sx={{ display:"flex", width:{xs:"280px" , sm:"400px"} }}>
                <img width={"100%"} height={"100%"} src={images[0]} alt=''/>
            </Box>
            <Box sx={{ textAlign:{xs:"center" , sm:"left"} }}>
                <Typography variant='h4'>{title}</Typography>
                <Typography fontSize={"22px"} color={"crimson"} variant='h6' >{price}</Typography>
                <Typography variant='body1' mt={1}>
                {description}
                </Typography>

                <Stack sx={{ justifyContent:{xs:"center",sm:"left"} , flexWrap:{xs:"wrap" , sm:"nowrap"}}} direction={"row"} gap={2} mt={2} my={2}>
                    {images.slice(1).map((item) => {
                        return(
                            <img height={"100%"} width={100} key={item} src={item} alt=''/>
                        )
                    })}
                </Stack>

                    <Button
                    sx={{ 
                        textTransform:"capitalize",
                        mt:1
                    }}
                    variant='contained'
                    >
                        <AddShoppingCartOutlined sx={{ mr:1 }} fontSize='small'/>
                        Buy Now
                    </Button>

            </Box>
        
        </Box>
    )
}
