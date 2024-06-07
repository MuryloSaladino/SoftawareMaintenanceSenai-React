import { Card, CardHeader } from "@mui/material"

const APICard = ({name, status, species, type, gender, image}) => {
    return(
        <Card>
            <CardHeader
                title={name}
            />
        </Card>
    )
}

export default APICard