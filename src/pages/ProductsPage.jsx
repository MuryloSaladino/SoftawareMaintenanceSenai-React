import { Fragment } from "react"
import produtos from "../constants/produtos.json"
import ProductCard from "../components/ProductCard"
import { Container, Grid, Typography } from "@mui/material"

const ProductsPage = () => {

    return (
        <Fragment>
            <Container>
                <Typography variant="h4" style={{ margin: "30px 0" }}>Showroom de produtos</Typography>
                <Grid container spacing={2} padding={2}>
                    {
                        produtos.map((item) =>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                                <ProductCard 
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                    status={item.status}
                                    category={item.category}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Fragment>
    )
}

export default ProductsPage