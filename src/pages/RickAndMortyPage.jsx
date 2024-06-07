import { Fragment } from "react"
import APICard from "../components/APICard"

const RickAndMortyPage = ({ page, setPage, data }) => {

    return (
        <Fragment>
            <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
                {
                    data.map((item) => 
                        <div key={item.id}>
                            <APICard name={item.name} desc={item.species} value={item.gender} image={item.image} />
                            {/* <button onClick={() => {}}>Info</button> */}
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default RickAndMortyPage