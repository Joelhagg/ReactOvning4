import axios from "axios"
import { useEffect, useState } from "react"
import { IMovie } from "../models/IMovie"
import { Movie } from "../models/Movie"


export const GetDataFromApi = () => {

    const [moviesFromApi, setMoviesFromApi] = useState<Movie[]>([])
    
    const getData = () => {

        axios.get<IMovie[]>('http://medieinstitutet-wie-products.azurewebsites.net/api/products')
        .then((response) => {
            let movieList = response.data;
            setMoviesFromApi(movieList)
        })        
    }

    useEffect(() => {
        getData()
    },[]);


    let listOfMovies = moviesFromApi.map((movie, i) => {
        return(
            <ul key={i}>
                <li>{movie.id} {movie.name}</li>
            </ul>
        )
    })
    
    return(
        <div>
            {listOfMovies}
        </div>
    )
}