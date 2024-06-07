import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"

const ProductCard = ({ name, description, price, image, category, status }) => {

    const statusStyle = { 
        backgroundColor: status ? "#06d6a0" : "#ef476f",
        borderRadius: 20, 
        padding: 10, 
        position: "absolute", 
        top: 10, 
        right: 10, 
        color: "#fff"
    }

    return(
        <Card sx={{ position: "relative" }}>
            <Typography style={statusStyle}>
                {status ? "Disponível" : "Em falta"}
            </Typography>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                image={image}
            />
            <CardContent>
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">R$ {price.replace(".", ",")}</Typography>
                    <Typography variant="h6">{category}</Typography>
                </Box>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard