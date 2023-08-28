export const Movie = ({mov}:any) => {

    return(
        <div>
            <img src={mov.Poster} alt={mov.Title}/>
            <p>{mov.Title}</p>
            <p>{mov.Year}</p>
        </div>
    )
}