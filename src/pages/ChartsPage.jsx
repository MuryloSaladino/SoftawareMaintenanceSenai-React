import { Container, Grid, Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import generationsData from "../constants/pokemonGenerations.json"
import typesData from "../constants/pokemonTypes.json"

const ChartsPage = () => {

    return(
        <Fragment>
            <Container>
                <Grid container spacing={10}>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Stack gap={2} sx={{ overflowX: "auto", overflowY: "hidden" }}>
                            <Typography variant="h5">Número de Pokemons por Geração</Typography>
                            <LineChart width={800} height={300} data={generationsData}>
                                <Line type="monotone" dataKey="numberOfPokemon" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="generation" />
                                <YAxis  dataKey="numberOfPokemon"/>
                                <Tooltip/>
                            </LineChart>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ overflowX: "auto", overflowY: "hidden" }}>
                        <Stack gap={2}>
                            <Typography variant="h5">Número de Pokemons por Tipo</Typography>
                            <BarChart width={800} height={300} data={typesData}>
                                <Bar dataKey="numberOfPokemon" stroke="#000000" strokeWidth={0.2}>
                                    {
                                        typesData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color || "#000"} />
                                        ))
                                    }
                                </Bar>
                                <XAxis dataKey="type" angle={90} tickFormatter={(t) => ""}/>
                                <YAxis />
                                <Tooltip/>
                            </BarChart>
                        </Stack>
                    </Grid>

                </Grid>
            </Container>
        </Fragment>
    )
}

export default ChartsPage