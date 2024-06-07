import { Fragment, useEffect, useState } from "react"
import APICard from "../components/APICard"
import { useSearchParams } from "react-router-dom"
import { api } from "../api/rmApi"
import { Container, Grid, Input, TextField } from "@mui/material"

const RickAndMortyPage = () => {

    let [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState([])

    useEffect(() => {
        api.get(`/character/?page=${searchParams.page}`).then((response) => {
          if(!response.data.results){
            console.log("Vazio")
          }
          setData(response.data.results)
        }).catch((error) => {
          console.error(error)
        })
    }, [searchParams.page])

    return (
        <Fragment>
            <Container style={{ display: "flex", flexDirection: "column", gap: 50 }}>
                <TextField
                    label="Page"
                    placeholder="1/43"
                    value={searchParams.page}
                    onInput={(event) => setSearchParams({page: event.target.value})}
                />
                <Grid container spacing={2}>
                    {
                        data.length > 0 &&
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