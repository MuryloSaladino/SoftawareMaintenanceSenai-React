import { AppBar, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [path, setPath] = useState(window.location.href)
    
    useEffect(() => {
        setPath(window.location.href)
    }, [window.location.href])

    const appBarStyle = { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        padding: "10px 20px", 
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%"
    }

    const afterActiveLinkStyle = {
        content: "''",
        width: "100%",
        display: "block",
        height: 2,
        backgroundColor: "#fff",
        transition: "0.3s"
    }
    const afterLinkStyle = {
        ...afterActiveLinkStyle,
        transform: "scaleX(0)"
    } 
    const linkStyle = {
        position: "relative",
        '&:hover::after': {
            transform: "scaleX(1)",
        }
    }

    return (

        <AppBar color="primary" style={appBarStyle}>
            <Typography variant="h4">Exercícios de Manutenção</Typography>
            <Stack flexDirection="row" gap={2}>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/products">
                    <Typography 
                        variant="h6" 
                        sx={{ ...linkStyle, '&::after': path.includes("products") ? afterActiveLinkStyle : afterLinkStyle }}
                    >Produtos</Typography>
                </Link>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/rickandmorty">
                    <Typography 
                        variant="h6" 
                        sx={{ ...linkStyle, '&::after': path.includes("rickandmorty") ? afterActiveLinkStyle : afterLinkStyle }}
                    >API</Typography>
                </Link>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/map">
                    <Typography 
                        variant="h6" 
                        sx={{ ...linkStyle, '&::after': path.includes("map") ? afterActiveLinkStyle : afterLinkStyle }}
                    >Mapa</Typography>
                </Link>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/charts">
                    <Typography 
                        variant="h6" 
                        sx={{ ...linkStyle, '&::after': path.includes("charts") ? afterActiveLinkStyle : afterLinkStyle }}
                    >Gráficos</Typography>
                </Link>
            </Stack>
        </AppBar>
    )
}

export default Header