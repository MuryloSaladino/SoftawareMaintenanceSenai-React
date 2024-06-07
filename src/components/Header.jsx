import { AppBar, Box, Button, Typography } from "@mui/material"
import { useState } from "react";

const Header = () => {

    const [value, setValue] = useState(0)

    const appBarStyle = { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        padding: "10px 20px", 
        justifyContent: "space-between",
        flexWrap: "wrap"
    }

    return (

        <AppBar color="primary" style={appBarStyle}>
            <Typography variant="h4">Exercícios de Manutenção</Typography>
            <Box style={{ display: "flex", gap: 15 }}>
                <Button color="secondary" variant="contained">Produtos</Button>
                <Button color="secondary" variant="contained">API</Button>
                <Button color="secondary" variant="contained">Mapa</Button>
            </Box>
        </AppBar>
    )
}

export default Header