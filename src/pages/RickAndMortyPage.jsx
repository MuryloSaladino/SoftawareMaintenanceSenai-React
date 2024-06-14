import { Fragment, useEffect, useState } from "react"
import APICard from "../components/APICard"
import { useSearchParams } from "react-router-dom"
import { api } from "../api/rmApi"
import { Container, Grid, Input, Skeleton, TextField, Typography } from "@mui/material"

const RickAndMortyPage = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState("1")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setError(false)
        setLoading(true)

        api.get(`/character/?page=${page}`).then((response) => {
          if(!response.data.results){
            console.log("Vazio")
          }
          setData(response.data.results)
        }).catch((error) => {
          console.error(error)
          setError(true)
        })

        setTimeout(() => setLoading(false), 1000)
    }, [page])

    return (
        <Fragment>
            <Container style={{ display: "flex", flexDirection: "column", gap: 50 }}>
                <TextField
                    label="Page"
                    placeholder="1/43"
                    value={page}
                    onInput={(e) => setPage(e.target.value)}
                />
                <Grid container spacing={2}>
                    {
                        loading ? 
                        
                        Array.from(new Array(9)).map((current, index) => 
                            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4} sx={{ height: 450 }}>
                                <Skeleton variant="rounded" height="100%"/>
                            </Grid>
                        ) :
                        
                        error ?
                        
                        <Typography variant="h4">Nenhum personagem Encontrado</Typography> :

                        data.map((item) => 
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                                <APICard
                                    name={item.name}
                                    species={item.species}
                                    gender={item.gender}
                                    image={item.image}
                                    status={item.status}
                                    type={item.type}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Fragment>
    )
}

export default RickAndMortyPage