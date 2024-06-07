import { AppBar, Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Header = () => {

    const appBarStyle = { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        padding: "10px 20px", 
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%"
    }

    return (

        <AppBar color="primary" style={appBarStyle}>
            <Typography variant="h4">Exercícios de Manutenção</Typography>
            <Box style={{ display: "flex", gap: 15 }}>
                <Link to="/products">
                    <Button color="secondary" variant="contained">Produtos</Button>
                </Link>
                <Link to="/rickandmorty">
                    <Button color="secondary" variant="contained">API</Button>
                </Link>
                <Link to="/map">
                    <Button color="secondary" variant="contained">Mapa</Button>
                </Link>
            </Box>
        </AppBar>
    )
}

export default Header