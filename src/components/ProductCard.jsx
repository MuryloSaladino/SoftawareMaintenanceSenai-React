import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                sx={{ height: 500, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}
            />
            <CardContent>
                <Stack flexDirection="column" gap={2}>
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">R$ {price.replace(".", ",")}</Typography>
                        <Typography variant="h6">{category}</Typography>
                    </Box>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            id={name}
                        >
                            <Typography variant="h6">Detalhes</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default ProductCard