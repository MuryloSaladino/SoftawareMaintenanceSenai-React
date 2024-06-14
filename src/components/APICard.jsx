import { Card, CardHeader, CardMedia } from "@mui/material"

const APICard = ({name, status, species, type, gender, image}) => {
    return(
        <Card>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                image={image}
                sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}
            />
        </Card>
    )
}

export default APICard